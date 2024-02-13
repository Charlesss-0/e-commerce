import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import FirebaseApp from '../../firebase/firebase'
import { ProductDetailsContainer } from '../../components/styled_components'
import { products } from '../../data/data'

export default function ProductDetails() {
	const firebaseApp = new FirebaseApp()
	const { itemId } = useParams()
	const [foundItem, setFoundItem] = useState()
	const [category, setCategory] = useState([])
	const location = useLocation()
	const currentPath = location.pathname.includes('details')
	const navigate = useNavigate()

	useEffect(() => {
		products.forEach(category => {
			const matchingItem = category.items.find(item => item.id === itemId)
			if (matchingItem) {
				setFoundItem(matchingItem)
				setCategory(category)
			}
		})
	}, [itemId])

	useEffect(() => {
		document.body.style.overflow = currentPath ? 'hidden' : 'auto'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [currentPath])

	const goBack = () => {
		navigate(-1)
	}

	return (
		<ProductDetailsContainer>
			<div className="p-[2rem] flex justify-end">
				<i className="fi fi-rr-cross cursor-pointer" onClick={goBack}></i>
			</div>

			{foundItem ? (
				<div className="container">
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

							<button
								className="border-solid border border-[#2f2f2f] my-[2rem] py-[0.5rem] px-[1.5rem] transition-all duration-300 hover:bg-[#2f2f2f] hover:text-white hover:cursor-pointer active:scale-[0.95]"
								onClick={() => firebaseApp.add(foundItem, 'cart')}
							>
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
