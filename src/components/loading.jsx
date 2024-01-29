import styled, { keyframes } from 'styled-components'

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
`

const Loader = styled.div`
	border: 4px solid #0004;
	border-left-color: transparent;
	width: 36px;
	height: 36px;
	animation: ${spin} 1s linear infinite;
	border-radius: 50%;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export default function Loading() {
	return <Loader></Loader>
}
