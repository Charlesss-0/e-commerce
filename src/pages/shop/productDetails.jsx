import { ProductDetailsContainer } from '../../components/styled_components'
import { products } from '../../data/data'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
	const { itemId } = useParams()

	let foundItem
	products.forEach(category => {
		const matchingItem = category.items.find(item => item.id === itemId)
		if (matchingItem) {
			foundItem = matchingItem
		}
	})

	return (
		<ProductDetailsContainer>
			{foundItem ? (
				<div>
					<div className="img-container">
						<img src={foundItem.img} alt={foundItem.details} />
					</div>

					<div className="details-container">
						<h1>{foundItem.details}</h1>
						<h2>By GC</h2>

						<div className="border-solid border border-black w-full my-[1rem]"></div>

						<h2>Price $ {foundItem.price}</h2>
					</div>
				</div>
			) : (
				''
			)}
		</ProductDetailsContainer>
	)
}
