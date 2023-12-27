import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const img = {
	src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	alt: 'living room',
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default function Hero() {
	return (
		<Container>
			<div className="overflow-hidden h-screen w-full flex justify-center items-center transition-all duration-500">
				<img src={img.src} alt={img.alt} draggable={false} className="w-full" />
				<div className="absolute w-full h-full bg-[#597E52]/30 flex justify-center items-center">
					<h1 className="text-[3rem] text-white font-bold">
						Make the most out of your place
					</h1>
				</div>
			</div>
			<div className="h-screen w-full transition-all duration-500"></div>
		</Container>
	)
}
