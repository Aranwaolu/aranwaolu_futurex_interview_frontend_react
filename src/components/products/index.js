import styled, { css } from 'styled-components'
import React from 'react'

import { addItemToCart } from '../../utils/cart'

const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	// flex-wrap: wrap;
	width: 30%;
	justify-content: space-between;
	align-items: center;
	// margin: 60px;
	// flex-basis: 33.3333%;
	padding: 100px 10px;
	flex: 1 1 auto;
	background-color: white;

	@media only screen and (max-width: 768px) {
		width: 40%;
	}
`

const ProductImg = styled.img.attrs((props) => ({
	src: props.src,
}))`
	display: flex;
	width: ${(props) => (props.width ? props.width : '140px')};
	height: 140px;
`

const ProductDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: grey;
	margin: 20px 0;
`

const Title = styled.p`
	font-size: 16px;
`

const AddToCartButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: center;
	outline: none;
	margin: ${(props) => (props.margin ? props.margin : '0px')};
	padding: 18px 0px;
	background: #03adfc;
	transition: all 0.4s ease-in-out;
	color: ${(props) => (props.color ? props.color : 'white')};
	font-family: sans-serif;
	font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
	word-spacing: 1px;
	border: 1px solid #03adfc;
	border-radius: 4px;
	width: 180px;

	&:focus,
	&:hover {
		cursor: pointer;
		background-color: #0c7bc4;
		border: 1px solid #0c7bc4;
	}
`

const Product = ({ product, toggle }) => {
	const handleCartButton = (product) => {
		addItemToCart(product)
		toggle()
	}

	return (
		<ProductCard key={product.id}>
			<ProductImg src={product.image} />
			<ProductDetails>
				<Title>{product.title}</Title>
				From ${product.price}
			</ProductDetails>

			<AddToCartButton
				onClick={() => {
					handleCartButton(product)
				}}
			>
				Add to Cart
			</AddToCartButton>
		</ProductCard>
	)
}

export default Product
