import styled from 'styled-components'

const Container = styled.div`
	background: #fafafaee;
	width: 80vw;
	height: 80vh;
	border-radius: 1rem;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 20;
`

export function Cart() {
	return <Container></Container>
}
