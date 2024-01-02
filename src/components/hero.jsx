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

export default function Hero() {
	return (
		<Container>
			<img src={img.src} alt={img.alt} draggable={false} className="w-full" />
			<h1 className="text-[3rem] text-white font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				Make the most out of your place
			</h1>
		</Container>
	)
}
