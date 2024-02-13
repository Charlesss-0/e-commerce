import { useEffect, useState } from 'react'

import { ProductDetailsContainer } from '../../components/styled_components'
import { products } from '../../data/data'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
	const { itemId } = useParams()
	const [foundItem, setFoundItem] = useState()
	const [category, setCategory] = useState([])

	useEffect(() => {
		products.forEach(category => {
			const matchingItem = category.items.find(item => item.id === itemId)
			if (matchingItem) {
				setFoundItem(matchingItem)
				setCategory(category)
			}
		})
	}, [itemId])

	return (
		<ProductDetailsContainer>
			{foundItem ? (
				<div>
					<div className="img-container">
						<div className="overflow-hidden rounded-[1rem]">
							<img src={foundItem.img} alt={foundItem.details} />
						</div>
					</div>

					<div className="details-container">
						<div>
							<h1 className="text-[3rem]">{foundItem.name}</h1>
							<div className="flex gap-[0.5rem]">
								<i className="fi fi-ss-star"></i>
								<i className="fi fi-ss-star"></i>
								<i className="fi fi-ss-star"></i>
								<i className="fi fi-ss-star"></i>
								<i className="fi fi-rs-star"></i>
							</div>

							<h2 className="my-[2rem] text-[1.5rem]">By GC</h2>

							<div className="border-solid border border-black w-full my-[2rem]"></div>

							<p className="text-[1.3rem]">Price $ {foundItem.price}</p>

							<button className="border-solid border border-[#2f2f2f] my-[2rem] py-[0.5rem] px-[1.5rem] transition-all duration-300 hover:bg-[#2f2f2f] hover:text-white hover:cursor-pointer active:scale-[0.95]">
								Add To Cart
							</button>

							<div className="my-[3rem]">
								<h2 className="mb-[0.5rem] text-[1.3rem]">Details</h2>
								<p>{foundItem.details}</p>
							</div>

							<p className="my-[2rem] font-bold">Related items</p>

							<ul className="flex gap-[1rem]">
								{category.items.map(item => (
									<li
										key={item.id}
										className="rounded-lg overflow-hidden w-[100px] hover:cursor-pointer"
									>
										<img src={item.img} alt={item.name} />
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</ProductDetailsContainer>
	)
}
