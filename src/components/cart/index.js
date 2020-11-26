import React, { useState } from 'react'

import { increaseQuantity, decreaseQuantity } from '../../utils/cart'
import {
	CartCard,
	LeftSideCartBox,
	Title,
	QuantityChanger,
	QuantityOperator,
	Price,
	CartImg,
	RemoveItemIcon,
} from './cartStyles'

const Cart = ({ cartItem, handleRemove, handleCartChange }) => {
	let [count, setcount] = useState(cartItem.quantity)

	const handleIncrease = () => {
		if (count < 10) {
			setcount(count + 1)
		} else {
			return
		}
	}

	const handleDecrease = () => {
		if (count > 0) {
			setcount(count - 1)
		} else {
			count = 0
		}
	}

	return (
		<CartCard key={cartItem.id}>
			<LeftSideCartBox>
				<Title>{cartItem.title}</Title>
				<QuantityChanger>
					<QuantityOperator
						onClick={() => {
							decreaseQuantity(cartItem)
							handleDecrease()
							handleCartChange()
						}}
					>
						-
					</QuantityOperator>
					<p>{count}</p>
					<QuantityOperator
						onClick={() => {
							increaseQuantity(cartItem)
							handleIncrease()
							handleCartChange()
						}}
					>
						+
					</QuantityOperator>
				</QuantityChanger>
			</LeftSideCartBox>
			<Price>${cartItem.price}</Price>
			<CartImg src={cartItem.image} />
			<RemoveItemIcon
				onClick={() => {
					handleRemove()
				}}
			>
				&times;
			</RemoveItemIcon>
		</CartCard>
	)
}

export default Cart
