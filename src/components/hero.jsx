import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import AirPods from '../assets/AirPods_Max.png'

const img = {
	src: 'https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-new/subhome-xmedia-51-3//w/1669/IMAGE-landscape-fill-9b14d69e-46d1-4d1e-85fa-037b9271bd79-default_0.jpg?ts=1703441149470',
	alt: 'Zara hero image',
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
				<img src={img.src} alt={img.alt} />
			</div>
			<div className="h-screen w-full transition-all duration-500"></div>
		</Container>
	)
}
