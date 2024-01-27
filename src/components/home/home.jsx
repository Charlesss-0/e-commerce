import styled from 'styled-components'
import { items } from '../../data/data'
import { Outlet } from 'react-router-dom'
import { IconsContainer } from '../../styles'

const Hero = styled.div`
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

const Featured = styled.div`
	padding: 1rem;
`

const HighlightContainer = styled.div`
	height: 500px;
	width: 90%;
	margin: 2rem auto;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	user-select: none;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(0 0 0 / 0.4);
	}
`

const Products = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
`

const Button = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	background: #1f1717;
	color: #fff;
	border: none;
	border-radius: 0.5rem;
`

export default function Home() {
	return (
		<>
			<Hero>
				<div>
					<h1 className="text-shadow-sm">Make the most out of your place</h1>
					<p className="text-shadow-sm">
						Discover furniture that brings comfort to your home
					</p>
					<PrimaryButton>
						<span>Shop Now</span>
					</PrimaryButton>
				</div>
			</Hero>

			<Featured>
				<div className="flex flex-col items-center justify-center gap-[1rem] my-[2rem] mb-[5rem]">
					<h1 className="text-[1.5rem]">Featured Products</h1>
					<div className="border-solid border-b-[3px] border-black w-[10em]"></div>
				</div>

				<ul className="flex justify-evenly">
					{items.featured.map((item, index) => (
						<li key={index} className="flex flex-col">
							<div className="h-[500px] overflow-hidden rounded-[0.5rem] box-shadow">
								<img
									src={item.img}
									className="w-[400px] hover:scale-105 transition-all duration-300 hover:cursor-pointer"
								/>
							</div>
							<div className="flex justify-between mt-[2rem]">
								<div className=" text-[1.1rem] font-bold text-[#4f4f4f]">
									<p>{item.details}</p>
									<p>${item.price}</p>
								</div>
								<IconsContainer>
									<i className="fi fi-rr-shopping-cart"></i>
									<i className="fi fi-rr-heart"></i>
								</IconsContainer>
							</div>
						</li>
					))}
				</ul>
			</Featured>

			<HighlightContainer>
				<img
					src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className="w-full"
				/>
				<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
					<h1 className="text-[2rem] font-bold">
						Brown wooden framed yellow padded chair
					</h1>
					<p className="text-[1.3rem] mb-[2rem]">
						Long lasting and comfortable to use. This is for you.
					</p>
					<Button>Shop Now</Button>
				</div>
			</HighlightContainer>

			<Products>
				<h1 className="text-center text-[1.5rem] mb-[1rem]">Our Products</h1>
				<div className="border-solid border-b-[3px] border-black w-[10em] mb-[5rem] m-auto"></div>
				<ul className="flex justify-evenly flex-wrap">
					{items.products.map((item, index) => (
						<li key={index}>
							<div className="overflow-hidden rounded-[0.5rem] box-shadow hover:cursor-pointer">
								<img
									src={item.img}
									className="w-[350px] hover:scale-105 transition-all duration-300"
								/>
							</div>

							<div className="flex justify-between mt-[2rem] mb-[3rem]">
								<div className=" text-[1.1rem] font-bold text-[#4f4f4f]">
									<p>{item.details}</p>
									<p>${item.price}</p>
								</div>
								<IconsContainer>
									<i className="fi fi-rr-shopping-cart"></i>
									<i className="fi fi-rr-heart"></i>
								</IconsContainer>
							</div>
						</li>
					))}
				</ul>
				<button className="border-solid border border-black px-[1rem] py-[0.5rem] w-[max-content] self-center hover:bg-black hover:text-white transition-all duration-500">
					Load more
				</button>
			</Products>

			<HighlightContainer>
				<img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
					<h1 className=" text-white text-[3rem] font-bold text-shadow-sm mb-[2rem]">
						Up to <span className="text-[#B80000]">50%</span> discount this
						season
					</h1>
					<Button>Shop Now</Button>
				</div>
			</HighlightContainer>

			<Outlet />
		</>
	)
}
