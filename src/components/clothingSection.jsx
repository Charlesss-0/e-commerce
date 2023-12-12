import one from '../assets/1.jpeg'
import two from '../assets/2.jpeg'
import three from '../assets/3.jpeg'
import four from '../assets/4.jpeg'

export default function ClothingSection() {
	const clothingItems = [
		{ url: one },
		{ url: two },
		{ url: three },
		{ url: four },
	]

	return (
		<div>
			<div className="w-full flex justify-center items-center [&>div]:border-solid [&>div]:border-b [&>div]:border-black [&>div]:w-[5rem]">
				<div></div>
				<h1 className="text-[1.5rem] m-[1rem] my-[2rem]">New Arrivals</h1>
				<div></div>
			</div>

			<div className="flex justify-evenly mb-[1rem]">
				{clothingItems.map((item, index) => (
					<div key={index} className="flex items-center">
						<div className="text-center">
							<img
								src={item.url}
								alt="clothing item"
								className="w-[200px] h-[220px] m-[1rem] rounded-lg shadow-md hover:cursor-pointer"
							/>
							<h1 className="mb-[0.5rem]">Lorem ipsum sir amet</h1>
							<p className="text-[0.6rem]">USD 30</p>
						</div>
						<div className="grid gap-[1rem] [&>i]:hover:cursor-pointer">
							<i className="fi fi-rr-plus"></i>
							<i className="fi fi-rr-heart"></i>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
