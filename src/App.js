import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { ProductsProvider } from './components/ProductsContext'
import Products from './components/products/productsList'
import CartList from './components/cart/cartList'
import WithDataLoading from './components/withDataLoading'
import useModal from './components/useModal'

const CartIcon = styled.a`
	font-size: 16px;
	color: #7a7a7a;
	display: flex;
	justify-content: flex-end;
	margin: 30px;

	&:hover {
		cursor: pointer;
	}
`

const App = () => {
	const { isShown, toggle } = useModal()
	const ProductsLoading = WithDataLoading(Products)
	const [appState, setAppState] = useState({
		loading: false,
		products: null,
	})

	useEffect(() => {
		setAppState({ loading: true })
		const api = `https://fakestoreapi.com/products`

		axios.get(api).then((productsList) => {
			setAppState({ loading: false, products: productsList.data })
		})

		// }, [])
	}, [setAppState]) // which is correct??

	return (
		<ProductsProvider>
			{appState.products && (
				<CartIcon
					onClick={() => {
						toggle()
					}}
				>
					SHOW CART
				</CartIcon>
			)}

			<ProductsLoading isLoading={appState.loading} toggle={toggle} />
			{/* <ProductsLoading isLoading={appState.loading} products={appState.products} toggle={toggle} /> */}

			<CartList isShown={isShown} hide={toggle} />
		</ProductsProvider>
	)
}

export default App
