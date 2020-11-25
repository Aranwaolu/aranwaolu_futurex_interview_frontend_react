import React, { useEffect, useLayoutEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

import { getCart, removeFromCart, clearCart } from '../../utils/cart'

import Cart, { EmptyCart } from './index'
import { Wrapper, Modal, CloseButton, ClearCartBtn, TopRow, PriceTag, CheckoutBtn } from './cartStyles'

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

const CartList = ({ isShown, hide }) => {
	const [cart, setcart] = useState([])

	const dynamicModalClass = () => (isShown ? { display: 'block' } : '')

	useEffect(() => {
		setcart(getCart())
	}, [isShown]) //check this very well

	const handleCartChange = () => {
		setcart(getCart())
	}

	const handleClick = async (cart) => {
		// Get Stripe.js instance
		const stripe = await stripePromise

		const api = 'https://interview-express-backend.herokuapp.com/create-checkout-session'
		// Call your backend to create the Checkout Session
		const response = await axios.post(api, cart)

		const session = await response.data

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

	return isShown ? (
		<Wrapper>
			<Modal style={dynamicModalClass()}>
				<div>
					<TopRow>
						<CloseButton onClick={hide}> &times;</CloseButton>
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
									handleClick(cart)
								}}
							>
								Checkout with Stripe
							</CheckoutBtn>
							<div>OR</div>
							<CheckoutBtn color='#0070ba'>Checkout with Paypal</CheckoutBtn>
						</div>
					)}
					{cart.cartItems.length === 0 && <div></div>}
				</div>
			</Modal>
		</Wrapper>
	) : null
}

export default CartList
