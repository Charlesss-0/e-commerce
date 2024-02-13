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

		& > ul {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
			gap: 2.5rem;
			justify-content: center;
	
			height: 100%;
			width: 100%;
			padding-bottom: 3rem;
			overflow: auto;
		}
    `}
`
