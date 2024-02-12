import styled from 'styled-components'

export const Item = styled.li`
	margin-top: 3rem;

	& > div > img {
		width: 300px;
		transition: all 400ms;

		&:hover {
			transform: scale(1.1);
		}
	}

	${props =>
		props.$list &&
		`
		border-radius: 0.5rem;
		display: flex;
		background: #efefef;
		box-shadow: 2px 2px 5px #0003;
		overflow: hidden;

		& > div {
			border-radius: 0;
		}

		& > div > div {
			padding: 1rem;
		}

		& > div > img {
			width: 200px;
		}
		`}
`
