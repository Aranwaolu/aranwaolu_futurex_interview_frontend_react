import React from 'react'
import styled from 'styled-components'

const LoadingMessage = styled.div`
	font-size: 20px;
	color: #7a7a7a;
	display: flex;
	justify-content: center;
	align-itmes: center;
	margin: 80px 0px;
`

const WithDataLoading = (Component) => {
	return function WihLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />
		return <LoadingMessage>...fetching products...</LoadingMessage>
	}
}

export default WithDataLoading
