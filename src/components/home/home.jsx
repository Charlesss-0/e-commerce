import styled from 'styled-components'
import { items } from '../data/data'

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
	background: #161a30;
	color: #fff;
	border: none;
	border-radius: 0.5rem;
`

const IconsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& > i {
		border-radius: 50%;
		padding: 0.5rem;
		outline: 1px solid #4f4f4f;
		transition: all 400ms;

		&:hover {
			cursor: pointer;
			background: #000;
			color: #fff;
			outline: none;
		}
	}
`

export default function Home() {
	return (
		<>
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
					<p className="text-[1.3rem]">
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
					<h1 className=" text-white text-[3rem] font-bold text-shadow-sm">
						Up to <span className="text-[#B80000]">50%</span> discount this
						season
					</h1>
					<Button>Shop Now</Button>
				</div>
			</HighlightContainer>
		</>
	)
}
