import styled from 'styled-components'

export const IconsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& > i {
		border-radius: 50%;
		padding: 0.5rem;
		transition: all 400ms;

		&:hover {
			cursor: pointer;
		}

		&:active {
			transform: scale(0.9);
		}
	}

	& > i:nth-child(1):hover {
		color: #0b60b0;
		outline: solid 1px #0b60b0;
	}

	& > i:nth-child(2):hover {
		color: red;
		outline: solid 1px red;
	}
`
