export const getCart = () => {
	let cart = JSON.parse(localStorage.getItem('cart') || '[]')

	let cartTotal = 0

	if (cart.length > 0) {
		const cartItems = [...cart]

		cartItems.forEach((obj) => {
			cartTotal += obj.price * obj.quantity
		})

		return {
			cartItems,
			cartTotal,
		}
	} else {
		return { cartItems: [], cartTotal }
	}
}

export const addItemToCart = (cartItemToAdd) => {
	let cart = JSON.parse(localStorage.getItem('cart') || '[]')

	let existingCartItem = cart.some((cartItem) => cartItem.id === cartItemToAdd.id)

	if (existingCartItem) {
		let cartItem = cart.find((cartItem) => cartItem.id === cartItemToAdd.id)
		if (cartItem.quantity >= 10) {
			cartItem.quantity = cartItem.quantity
		} else {
			cartItem.quantity += 1
		}
	} else {
		cart = [...cart, { ...cartItemToAdd, quantity: 1 }]
	}

	localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (item) => {
	let cart = JSON.parse(localStorage.getItem('cart') || '[]')
	let existingCartItem = cart.some((cartItem) => cartItem.id === item.id)

	if (existingCartItem) {
		let index = cart.findIndex((cartItem) => cartItem.id === item.id)
		cart.splice(index, 1)
		localStorage.setItem('cart', JSON.stringify(cart))
	}
}

export const clearCart = () => {
	localStorage.removeItem('cart')
}

export const decreaseQuantity = (item) => {
	let cart = JSON.parse(localStorage.getItem('cart') || '[]')
	let existingCartItem = cart.some((cartItem) => cartItem.id === item.id)

	if (existingCartItem) {
		let cartItem = cart.find((cartItem) => cartItem.id === item.id)

		if (cartItem.quantity > 0) {
			cartItem.quantity -= 1
		} else {
			cartItem.quantity = 0
		}
	}
	localStorage.setItem('cart', JSON.stringify(cart))
}

export const increaseQuantity = (item) => {
	let cart = JSON.parse(localStorage.getItem('cart') || '[]')
	let existingCartItem = cart.some((cartItem) => cartItem.id === item.id)

	if (existingCartItem) {
		let cartItem = cart.find((cartItem) => cartItem.id === item.id)

		if (cartItem.quantity >= 10) {
			cartItem.quantity = cartItem.quantity
		} else {
			cartItem.quantity += 1
		}
	}
	localStorage.setItem('cart', JSON.stringify(cart))
}

export const getQuantityOfOneItem = (item) => {
	let cart = JSON.parse(localStorage.getItem('cart') || '[]')
	let existingCartItem = cart.some((cartItem) => cartItem.id === item.id)

	if (existingCartItem) {
		let cartItem = cart.find((cartItem) => cartItem.id === item.id)
		return cartItem.quantity
	}
}
