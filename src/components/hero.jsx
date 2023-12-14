import hero from '../assets/hero.jpeg'

export default function Hero() {
	return (
		<div className="h-[30rem] overflow-hidden relative">
			<img src={hero} alt="hero image" className="w-full" />
			<h1 className="text-white text-[3rem] text-shadow font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				Discover our new selection
			</h1>
		</div>
	)
}
