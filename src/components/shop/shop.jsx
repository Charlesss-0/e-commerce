import HeaderContent from '../home/header'
import Footer from '../home/footer'
import styled from 'styled-components'

const Hero = styled.div`
	background: url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
	background-size: cover;
	background-position: center;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: #739072aa;
	}

	& > * {
		z-index: 1;
	}
`

const Button = styled.button`
	color: #fff;
	font-size: 1.5rem;
	border-radius: 10px;
	position: relative;
	overflow: hidden;
	padding: 0.5rem 1.5rem;
	transition: all 500ms;

	&:active {
		transform: scale(0.9);
	}

	&:hover {
		outline: 1px solid #fff;
	}

	&:hover div {
		transform: translateX(-100%);
	}

	& > span {
		z-index: 1;
	}

	& > div {
		z-index: -1;
		transition: all 500ms;
	}
`

export default function Shop() {
	return (
		<>
			<HeaderContent />
			<Hero>
				<h1 className="text-[3rem] text-[#fff] font-bold">
					Up to <span className="text-[#B80000]">50%</span> discount this season
				</h1>
				<Button>
					<div className="bg-[#607274] absolute top-0 left-0 right-0 bottom-0"></div>
					<span>View Products</span>
				</Button>
			</Hero>
			<Footer />
		</>
	)
}
