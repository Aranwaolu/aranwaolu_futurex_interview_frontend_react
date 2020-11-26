import React, { useEffect, useLayoutEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

import { getCart, removeFromCart, clearCart } from '../../utils/cart'
import ReactPayPal from '../PayPal'

import Cart from './index'
import {
	Wrapper,
	Modal,
	CloseButton,
	ClearCartBtn,
	TopRow,
	PriceTag,
	CheckoutBtn,
	EmptyCart,
} from './cartStyles'

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

const CartList = ({ isShown, hide }) => {
	const [cart, setcart] = useState([])
	const [checkout, setCheckout] = useState(false)

	const dynamicModalClass = () => (isShown ? { display: 'block' } : '')

	useEffect(() => {
		setcart(getCart())
	}, [isShown]) //check this very well

	const handleCartChange = () => {
		setcart(getCart())
	}

	const handleStripeBtnClick = async (cart) => {
		// Get Stripe.js instance
		const stripe = await stripePromise

		const api = 'https://interview-express-backend.herokuapp.com/create-checkout-session'
		// Call your backend to create the Checkout Session
		const response = await axios.post(api, cart)

		const session = await response.data

		clearCart()
		alert('Wait! This takes a few seconds...')

		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		})

		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`.
		}
	}

	const handlePaypalBtnClick = async (cart) => {}

	return isShown ? (
		<Wrapper>
			<Modal style={dynamicModalClass()}>
				{checkout === true ? (
					<div>
						<TopRow>
							<CloseButton
								onClick={() => {
									setCheckout(false)
									hide()
								}}
							>
								{' '}
								&times;
							</CloseButton>
							<p>Your Cart</p>
						</TopRow>
						<ReactPayPal cart={cart} />
					</div>
				) : (
					<div>
						<div>
							<TopRow>
								<CloseButton onClick={hide}>&times;</CloseButton>
								<p>Your Cart</p>
							</TopRow>

							{cart && cart.cartItems.length !== 0 && (
								<ClearCartBtn
									onClick={() => {
										clearCart()
										handleCartChange()
									}}
								>
									Clear cart
								</ClearCartBtn>
							)}
						</div>

						<div>
							{cart &&
								cart.cartItems.length !== 0 &&
								cart.cartItems.map((product) => (
									<Cart
										key={product.id}
										cartItem={product}
										handleRemove={() => {
											removeFromCart(product)
											handleCartChange()
										}}
										handleCartChange={handleCartChange}
									/>
								))}
							{cart && cart.cartItems.length === 0 && <EmptyCart>Your cart is empty</EmptyCart>}
						</div>

						<div>
							{cart && cart.cartItems.length !== 0 && (
								<div>
									<PriceTag>
										<p>Total: </p>
										<p>${cart.cartTotal}</p>
									</PriceTag>
									<CheckoutBtn
										onClick={() => {
											handleStripeBtnClick(cart)
										}}
									>
										Checkout with Stripe
									</CheckoutBtn>
									<CheckoutBtn
										color='#0070ba'
										style={{ marginBottom: '40px' }}
										onClick={() => {
											setCheckout(true)
										}}
									>
										Checkout with Paypal
									</CheckoutBtn>
								</div>
							)}
							{cart.cartItems.length === 0 && <div></div>}
						</div>
					</div>
				)}
			</Modal>
		</Wrapper>
	) : null
}

export default CartList
