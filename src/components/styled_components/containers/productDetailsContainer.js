import styled from 'styled-components'

export const ProductDetailsContainer = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 20;
	overflow: auto;

	width: 100%;
	height: 100vh;
	background: #efefef;
	display: grid;
	justify-content: center;

	& > .container {
		display: flex;

		& > div {
			width: 50%;
		}
	}

	& > .container > .img-container {
		height: 100%;
		padding: 5rem;
		display: grid;
		place-content: center;

		& > div {
			box-shadow: 3px 3px 6px #0005;
		}

		& > div > img {
			height: 100%;
			object-fit: cover;
			transition: all 500ms;

			&:hover {
				transform: scale(1.3);
			}
		}
	}

	& > .container > .details-container {
		padding: 5rem 3rem;
		display: flex;
		align-items: center;
	}
`
