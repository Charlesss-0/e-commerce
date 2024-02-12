import styled from 'styled-components'

export const ProductDetailsContainer = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 20;
	overflow: hidden;

	width: 100%;
	height: 100%;
	background: #efefef;

	& > div {
		display: flex;
	}

	& > div > .img-container {
		height: 100vh;
		width: 50%;
		overflow: hidden;

		& > img {
			height: 100%;
			object-fit: cover;
		}
	}

	& > div > .details-container {
		padding: 1rem;
		flex-grow: 1;

		& > h1 {
			font-size: 2rem;
		}

		& > h2 {
			font-size: 1.5rem;
		}
	}
`
