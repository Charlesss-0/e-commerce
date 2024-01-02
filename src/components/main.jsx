import styled from 'styled-components'
import { PrimaryButton } from './hero'

const items = [
	{
		img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		details: 'Black and brown wooden chair',
		price: 50,
	},
	{
		img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		details: 'Tufted white leather sofa chair',
		price: 30,
	},
	{
		img: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		details: 'Beige wooden bar stool',
		price: 40,
	},
]

const HighlightContainer = styled.div`
	height: 500px;
	width: 85%;
	margin: 2rem auto;
	border-radius: 0.5rem;
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

const SecondaryButton = styled(PrimaryButton)`
	font-size: 1rem;
	background: #000;
	color: #fff;
	border: none;
	border-radius: 0.5rem;
`

export default function Main() {
	return (
		<>
			<div className="p-[1rem]">
				<div className="flex flex-col items-center justify-center gap-[1rem] my-[2rem] mb-[3rem]">
					<h1 className="text-[1.5rem]">Featured Products</h1>
					<div className="border-solid border-b-[3px] border-black w-[10em]"></div>
				</div>

				<ul className="flex justify-evenly">
					{items.map((item, index) => (
						<li key={index} className="flex flex-col">
							<div className="h-[500px] overflow-hidden flex flex-col justify-center rounded-[0.5rem] box-shadow">
								<img
									src={item.img}
									className="w-[400px] hover:scale-110 transition-all duration-300 hover:cursor-pointer"
								/>
							</div>
							<div className="flex justify-between mt-[2rem]">
								<div className=" text-[1.1rem] font-bold text-[#4f4f4f]">
									<p>{item.details}</p>
									<p>${item.price}</p>
								</div>
								<div className="flex items-center gap-[0.5rem] [&>i]:border-solid [&>i]:border [&>i]:border-[#4f4f4f] [&>i]:text-[#4f4f4f] [&>i]:p-[0.5rem] [&>i]:rounded-full [&>i]:hover:cursor-pointer">
									<i className="fi fi-rr-shopping-cart"></i>
									<i className="fi fi-rr-heart"></i>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>

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
					<SecondaryButton>Shop Now</SecondaryButton>
				</div>
			</HighlightContainer>
		</>
	)
}
