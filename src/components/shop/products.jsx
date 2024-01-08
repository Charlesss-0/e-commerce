import HeaderContent from '../home/header'
import Footer from '../home/footer'
import styled from 'styled-components'
import { products } from '../data/data'

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
	margin-top: 5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 1rem;

	& > div {
		width: 300px;
	}

	& > div > img {
		width: 300px;
		object-fit: cover;
		border-radius: 0.5rem;
	}
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
				<h1 className="text-[3rem] text-[#fff] font-bold">
					Up to <span className="text-[#B80000]">50%</span> discount this season
				</h1>
				<Button>
					<div className="bg-[#607274] absolute top-0 left-0 right-0 bottom-0"></div>
					<span>View Products</span>
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
					<div key={index}>
						<img src={item.img} />
						<p className="text-[0.8rem] mt-[1rem]">{item.details}</p>
						<p>$ {item.price}</p>
					</div>
				))
			)}
		</>
	)
}
