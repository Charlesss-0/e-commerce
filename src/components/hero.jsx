import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Image = styled.img`
	transition: all 500ms;
	border: solid 1px black;
	width: 100%;
`

const img = {
	src: 'https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-new/subhome-xmedia-51-3//w/1669/IMAGE-landscape-fill-9b14d69e-46d1-4d1e-85fa-037b9271bd79-default_0.jpg?ts=1703441149470',
	alt: 'Zara hero image',
}

export default function Hero() {
	const [scrollTo, setScrollTo] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (!scrollTo) {
				window.scrollTo({
					top: window.innerHeight,
					behavior: 'smooth',
				})
				setScrollTo(true)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollTo])

	return (
		<Container>
			<div className="h-screen overflow-hidden w-full grid content-center">
				<Image src={img.src} alt={img.alt} />
			</div>
			<div
				className={`h-screen w-full bg-[aliceblue] transition-all duration-500`}
			></div>
		</Container>
	)
}
