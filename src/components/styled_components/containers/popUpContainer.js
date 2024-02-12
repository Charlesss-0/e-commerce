import styled from 'styled-components'

export const PopUpContainer = styled.div`
	background: #fafafa99;
	width: 80vw;
	height: 90vh;
	border-radius: 1rem;
	padding: 1rem;
	backdrop-filter: blur(1rem);
	overflow: hidden;

	& > ul::-webkit-scrollbar {
		display: none;
	}

	${props =>
		props.$activeClass &&
		`
        padding: 2rem;
    `}
`
