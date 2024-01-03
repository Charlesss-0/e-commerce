import styled from 'styled-components'

const img = {
	src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	alt: 'living room',
}

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	transition: all 500ms;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(89 126 82 / 0.4);
	}
`

export const PrimaryButton = styled.button`
	margin-top: 2vh;
	font-size: 1.8rem;
	border: 2px solid #fff;
	padding: 0.5rem 1.5rem;
	transition: all 500ms;
	font-weight: 600;

	&:hover {
		background: #fff;
		color: #2f2f2f;
	}
`

export default function Hero() {
	return (
		<Container>
			<img src={img.src} alt={img.alt} draggable={false} className="w-full" />
			<div className="flex flex-col items-center text-[3rem] text-white font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h1>Make the most out of your place</h1>
				<p className="font-normal text-[1.5rem] mb-[1rem]">
					Discover furniture that brings comfort to your home
				</p>
				<PrimaryButton>Shop Now</PrimaryButton>
			</div>
		</Container>
	)
}
