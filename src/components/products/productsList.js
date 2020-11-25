import React, { useContext } from 'react'
import styled from 'styled-components'

import { ProductsContext } from '../ProductsContext'
import Product from './index'

const ProductDisplay = styled.div`
	// width: 100vw;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: left;
	margin: 20px;
`

// const Products = ({ products, toggle }) => {
const Products = ({ toggle }) => {
	const [appState, setAppState] = useContext(ProductsContext)

	return (
		<ProductDisplay>
			{appState.products &&
				appState.products.map((product) => (
					<Product key={product.id} product={product} toggle={toggle} />
				))}
		</ProductDisplay>
	)
}

export default Products
