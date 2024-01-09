import styled from 'styled-components'

const Container = styled.div`
	background: url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
	background-size: cover;
	background-position: center;
	display: flex;
	height: 100vh;
	width: 100%;
	transition: all 500ms;
	position: relative;
	color: #ddf2fd;

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	& > div > h1 {
		font-size: 3.5rem;
		font-weight: bold;
	}

	& > div > p {
		font-size: 1.5rem;
		font-weight: bold;
	}

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: #597e5244;
	}
`

const PrimaryButton = styled.button`
	margin-top: 2vh;
	font-size: 1.5rem;
	border-radius: 0.5rem;
	padding: 0.5rem 1.5rem;
	transition: all 500ms;
	font-weight: 600;
	position: relative;
	overflow: hidden;
	outline: none;

	& > span {
		color: #ddf2fd;
		text-shadow: 1px 1px 3px #000a;
		position: relative;
		z-index: 2;
	}

	&:hover {
		outline: 1px solid #efefef;
	}

	&:active {
		transform: scale(0.9);
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: #3f230599;
		transition: all 500ms;
		z-index: 1;
	}

	&:hover::before {
		transform: translateY(100%);
	}
`

export default function Hero() {
	return (
		<Container>
			<div>
				<h1 className="text-shadow-sm">Make the most out of your place</h1>
				<p className="text-shadow-sm">
					Discover furniture that brings comfort to your home
				</p>
				<PrimaryButton>
					<span>Shop Now</span>
				</PrimaryButton>
			</div>
		</Container>
	)
}
