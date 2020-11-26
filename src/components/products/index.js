import React from 'react'

import { addItemToCart } from '../../utils/cart'
import { ProductCard, ProductImg, ProductDetails, Title, AddToCartButton } from './productsStyles'

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
