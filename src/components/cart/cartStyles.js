import styled from 'styled-components'

export const Wrapper = styled.div`
	z-index: 10;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	// background-color: rgba(219, 219, 217, 0.3);
`

export const Modal = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	padding: 30px;
	background-color: #f2f2ef;
	height: 100vh;
	z-index: 20;
	justify-content: flex-end;
	align-items: space-between;
	position: fixed;
	overflow-x: hidden;
	overflow-y: auto;
	top: 0;
	right: 0;

	@media only screen and (max-width: 768px) {
		width: 80%;
	}
`

export const CloseButton = styled.button`
	font-size: 16px;
	font-weight: 500;
	color: grey;
	border: 1px solid grey;
	border-radius: 15px;
	margin: 20px 0px;

	&:focus,
	&:hover {
		cursor: pointer;
	}
`

export const ClearCartBtn = styled.div`
	font-size: 16px;
	font-weight: 500;
	color: ${(props) => (props.color ? props.color : 'white')};
	border: 1px solid grey;
	border-radius: 4px;
	margin: 20px 0px;
	padding: 10px;
	background-color: teal;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:focus,
	&:hover {
		cursor: pointer;
	}
`

export const TopRow = styled.div`
	font-size: 16px;
	font-weight: 500;
	color: grey;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const PriceTag = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 20px;
	font-weight: 500;
	// margin: 30px 0px;
	border-top: 2px solid grey;
	// border-bottom: 2px solid grey;
`

export const CheckoutBtn = styled.div`
	font-size: 16px;
	font-weight: 500;
	color: white;
	border: 1px solid ${(props) => (props.color ? props.color : '#6b73f3')};
	border-radius: 4px;
	margin: 20px 0px;
	padding: 15px;
	background-color: ${(props) => (props.color ? props.color : '#6b73f3')};
	// width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0px;

	&:focus,
	&:hover {
		cursor: pointer;
	}
`

export const EmptyCart = styled.div`
	padding: 30px;
	font-size: 20px;
	color: grey;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 80px 0px;
`

export const CartCard = styled.div`
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

export const CartImg = styled.img.attrs((props) => ({
	src: props.src,
}))`
	display: flex;
	width: ${(props) => (props.width ? props.width : '40px')};
	height: 40px;
`

export const LeftSideCartBox = styled.div`
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

export const Title = styled.p`
	font-size: 16px;
`

export const QuantityChanger = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: 1px solid grey;
	border-radius: 3px;
	width: 60px;
	height: 22px;
	padding: 7px;
`
export const QuantityOperator = styled.a`
	font-weight: bold;

	&:focus,
	&:hover {
		cursor: pointer;
		color: red;
	}
`

export const Price = styled.div`
	color: grey;
	font-size: 18px;
	padding: 5px;
`

export const RemoveItemIcon = styled.a`
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
