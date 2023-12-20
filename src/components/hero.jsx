import { useEffect, useState, useRef } from 'react'

const image = {
	max: {
		src: 'https://www.apple.com/v/airpods-max/f/images/overview/hero__gnfk5g59t0qe_xlarge.png',
		alt: 'AirPods Max',
	},
	pro: {
		src: 'https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/0000.png',
		alt: 'AirPods Pro',
	},
}

export default function Hero() {
	const [scrollY, setScrollY] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className="flex flex-col items-center [&>img]:h-screen h-screen">
			<img src={image.max.src} alt={image.max.alt} />
			<img
				src={image.pro.src}
				alt={image.pro.alt}
				className={`bg-[#000] transition-all duration-500 ${
					scrollY ? 'translate-y-[-100%]' : null
				}`}
			/>
		</div>
	)
}
