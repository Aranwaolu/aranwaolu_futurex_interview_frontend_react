import React from 'react'

export default function ReactPayPal(props) {
	const [paid, setPaid] = React.useState(false)
	const [error, setError] = React.useState(null)
	const paypalRef = React.useRef()
	const { cart } = props
	console.log(cart)

	// To show PayPal buttons once the component loads
	React.useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions) => {
					return actions.order.create({
						intent: 'CAPTURE',
						purchase_units: [
							{
								description: 'Your description',
								amount: {
									currency_code: 'USD',
									value: cart.cartTotal,
								},
							},
						],
					})
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture()
					setPaid(true)
					console.log(order)
				},
				onError: (err) => {
					//   setError(err),
					console.error(err)
				},
			})
			.render(paypalRef.current)
	}, [])

	// If the payment has been made
	if (paid) {
		return <div>Payment successful.!</div>
	}

	// If any error occurs
	if (error) {
		return <div>Error Occurred in processing payment.! Please try again.</div>
	}

	// Default Render
	return (
		<div
			style={{
				zIndex: '200',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '80px, 0px',
			}}
		>
			<h4>Total Amount in USD : {cart.cartTotal}</h4>
			<div ref={paypalRef} />
		</div>
	)
}
