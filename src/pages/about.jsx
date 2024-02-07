import { Link } from 'react-router-dom'

export default function AboutPage() {
	return (
		<div className="h-screen flex flex-col gap-[2rem] justify-center items-center">
			<h1 className=" text-[1.5rem]">In Development!</h1>
			<Link to="/">
				<button className="border-solid border-2 border-[#2f2f2f] px-[1rem] py-[0.5rem] hover:bg-[#2f2f2f] hover:text-white transition-all duration-400">
					Go back
				</button>
			</Link>
		</div>
	)
}
