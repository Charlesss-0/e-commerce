import styled, { keyframes } from 'styled-components'

import FirebaseApp from '../../firebase/firebase'
import Footer from '../../components/footer'
import HeaderContent from '../../components/header'
import { IconsContainer } from '../../components/styled-components'
import { Outlet } from 'react-router-dom'
import { products } from '../../data/data'
import { useAppContext } from '../../context/context'
import { useState } from 'react'

const Hero = styled.div`
	background: url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
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
		background-color: #0005;
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

const HeroButton = styled.button`
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

	& > div:nth-child(1) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& > div > ul > li {
		background: #f3f3f3;
		color: #2f2f2f;
		height: min-content;
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

const ListContainer = styled.ul`
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 1rem;
`

const Item = styled.li`
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

export default function Products() {
	const sections = [
		'All',
		'Bedroom',
		'Living Room',
		'Kitchen',
		'Workspace',
		'Bathroom',
	]
	const firebaseApp = new FirebaseApp()
	const [listGrid, setListGrid] = useState(false)

	return (
		<>
			<HeaderContent />
			<Hero>
				<h1 className="text-[4.5rem] text-[#fff] font-bold text-shadow-sm">
					Up to <span className="text-[#B80000]">50%</span> discount this season
				</h1>
				<a href="#content">
					<HeroButton>
						<span className="text-shadow-sm">View Products</span>
					</HeroButton>
				</a>
			</Hero>

			<ProductsContainer id="content">
				<div>
					<ul className="flex gap-[0.5rem]">
						{sections.map((section, index) => (
							<li key={index}>{section}</li>
						))}
					</ul>
					<div className="flex items-center gap-[1.5rem] text-[1.3rem] text-[#5f5f5f] [&>i]:hover:cursor-pointer [&>i]:p-[1rem] [&>i]:rounded-full [&>i]:transition-all [&>i]:duration-400">
						<i
							onClick={() => setListGrid(!listGrid)}
							className={`fi ${
								listGrid
									? 'fi-rr-rectangle-vertical-history rotate-[90deg]'
									: 'fi-rr-apps'
							} hover:bg-[#f3f3f3]`}
						></i>
						<i className="fi fi-rr-settings-sliders flex hover:bg-[#f3f3f3]"></i>
					</div>
				</div>

				<ListContainer className={listGrid ? 'flex flex-col' : 'block'}>
					{products.map(category =>
						category.items.map((item, index) => (
							<Item key={index} $list={listGrid}>
								<div className="overflow-hidden rounded-[0.5rem] hover:cursor-pointer">
									<img src={item.img} />
								</div>
								<div
									className={`flex justify-between mt-[1rem] ${
										listGrid ? 'flex flex-col mt-0' : ''
									}`}
								>
									<div
										className={`w-[200px] flex flex-col gap-[0.5rem] text-[0.8rem] ${
											listGrid ? 'flex items-start justify-end' : ''
										}`}
									>
										<p>{item.details}</p>
										<p>$ {item.price}</p>
									</div>
									<IconsContainer $condition>
										<i
											className="fi fi-rr-shopping-cart"
											onClick={() => firebaseApp.add(item, 'cart')}
										></i>
										<i
											className="fi fi-rr-heart"
											onClick={() => firebaseApp.add(item, 'favorites')}
										></i>
									</IconsContainer>
								</div>
							</Item>
						))
					)}
				</ListContainer>
			</ProductsContainer>
			<Footer />
			<Outlet />
		</>
	)
}
