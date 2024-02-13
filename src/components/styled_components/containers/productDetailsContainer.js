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

	& > div > .details-container {
		padding: 5rem 3rem;
		width: 50%;
		display: flex;
		align-items: center;
	}
`
