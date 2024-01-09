import HeaderContent from '../home/header'
import Footer from '../home/footer'
import styled, { keyframes } from 'styled-components'
import { products } from '../data/data'
import { IconsContainer } from '../home/home'

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
	}

	& > * {
		z-index: 1;
	}
`

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
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

	& > span {
		position: relative;
		z-index: 1;
	}

	&::before {
		content: '';
		background: linear-gradient(45deg, #1b4242, #5c8374, #4f6f52);
		background-size: 200vw 200vh;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transition: all 500ms;
		animation: ${gradient} 5s linear infinite;
	}

	&:hover::before {
		transform: translateY(100%);
	}
`

const ProductsContainer = styled.div`
	padding: 2rem;

	& > div > ul > li {
		background: #f3f3f3;
		color: #2f2f2f;
		padding: 0.5rem 1.5rem;
		border-radius: 50em;
		backdrop-filter: blur(10px);
		transition: all 200ms;
		user-select: none;

		&:hover {
			cursor: pointer;
			opacity: 0.7;
		}

		&:active {
			transform: scale(0.9);
		}
	}
`

const ListContainer = styled.div`
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 1rem;
`

export default function Products() {
	const sections = [
		'All',
		'Bedroom',
		'Living Room',
		'Kitchen',
		'Workspace',
		'Bathroom',
	]

	return (
		<>
			<HeaderContent />
			<Hero>
				<h1 className="text-[4.5rem] text-[#fff] font-bold text-shadow-sm">
					Up to <span className="text-[#B80000]">50%</span> discount this season
				</h1>
				<Button>
					<span className="text-shadow-sm">View Products</span>
				</Button>
			</Hero>
			<ProductsContainer>
				<div className="flex justify-between">
					<ul className="flex gap-[0.5rem]">
						{sections.map((section, index) => (
							<li key={index}>{section}</li>
						))}
					</ul>
					<div className="flex items-center gap-[1.5rem] text-[1.3rem] text-[#5f5f5f] [&>i]:hover:cursor-pointer">
						<i className="fi fi-rr-apps flex"></i>
						<i className="fi fi-rr-settings-sliders flex"></i>
					</div>
				</div>
				<ListContainer>
					<Items />
				</ListContainer>
			</ProductsContainer>
			<Footer />
		</>
	)
}

function Items() {
	return (
		<>
			{products.map(category =>
				category.items.map((item, index) => (
					<div key={index} className="mt-[5rem]">
						<div className="w-[300px] overflow-hidden rounded-[0.5rem] hover:cursor-pointer">
							<img
								src={item.img}
								className="hover:scale-105 transition-all duration-[400ms]"
							/>
						</div>
						<div className="flex justify-between mt-[1rem]">
							<div className="w-[200px] flex flex-col gap-[0.5rem] text-[0.8rem]">
								<p>{item.details}</p>
								<p>$ {item.price}</p>
							</div>
							<IconsContainer>
								<i className="fi fi-rr-shopping-cart"></i>
								<i className="fi fi-rr-heart"></i>
							</IconsContainer>
						</div>
					</div>
				))
			)}
		</>
	)
}
