import { Link, useRouteError } from 'react-router-dom'
import styled from 'styled-components'

const ErrorContainer = styled.div`
	background-image: url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
	height: 100vh;
	color: #fff;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: #0005;
		z-index: 1;
	}

	& > div > * {
		z-index: 10;
	}
`

const Button = styled.button`
	outline: 2px solid #fff;
	padding: 0.5rem 1rem;
	font-size: 2rem;
	font-weight: 900;
	transition: all 500ms;

	&:hover {
		background: #000;
		outline: none;
	}

	&:active {
		transform: scale(0.95);
	}
`

export default function Error() {
	const error = useRouteError()
	console.error(error)

	return (
		<ErrorContainer>
			<div className="h-full flex flex-col items-center justify-center gap-[2rem]">
				<h1 className="text-[5rem] font-bold">Oops!</h1>
				<p className="text-[2rem]">Sorry, an unexpected error has occurred.</p>
				<p className="italic">{error.statusText || error.message}</p>
				<Link to={'home/'}>
					<Button>Go Home</Button>
				</Link>
			</div>
		</ErrorContainer>
	)
}
