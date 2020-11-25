import styled from 'styled-components'
import React, { useState } from 'react'

import { increaseQuantity, decreaseQuantity } from '../../utils/cart'

export const EmptyCart = styled.div`
	padding: 30px;
	font-size: 20px;
	color: grey;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 80px 0px;
`

const CartCard = styled.div`
	display: flex;
	flex-direction: row;
	// flex-wrap: wrap;
	width: 450px;
	justify-content: space-between;
	align-items: center;
	margin: 20px;
	padding: 10px 20px;
	background-color: white;
`

const CartImg = styled.img.attrs((props) => ({
	src: props.src,
}))`
	display: flex;
	width: ${(props) => (props.width ? props.width : '40px')};
	height: 40px;
`

const LeftSideCartBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: left;
	font-size: 12px;
	color: #747d7a;
	margin: 20px 0;
	width: 180px;
	// height: auto;
	// background-color: red;
`

const Title = styled.p`
	font-size: 16px;
`

const QuantityChanger = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: 1px solid grey;
	width: 60px;
	height: 22px;
	padding: 7px;
`
const QuantityOperator = styled.a`
	font-weight: bold;

	&:focus,
	&:hover {
		cursor: pointer;
		color: red;
	}
`

const Price = styled.div`
	color: grey;
	font-size: 18px;
	padding: 5px;
`

const RemoveItemIcon = styled.a`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	color: grey;

	&:focus,
	&:hover {
		cursor: pointer;
		color: black;
	}
`

const Cart = ({ cartItem, handleRemove, handleCartChange }) => {
	let [count, setcount] = useState(cartItem.quantity)

	const handleIncrease = () => {
		if (count < 10) {
			setcount(count + 1)
		} else {
			count = count
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
