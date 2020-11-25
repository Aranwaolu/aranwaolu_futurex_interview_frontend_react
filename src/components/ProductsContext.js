import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const ProductsContext = createContext()

export const ProductsProvider = (props) => {
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
	}, [])

	return (
		<ProductsContext.Provider value={[appState, setAppState]}>{props.children}</ProductsContext.Provider>
	)
}
