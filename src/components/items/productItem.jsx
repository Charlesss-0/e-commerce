import { IconsContainer } from '../styled_components'
import { Item } from '../styled_components'
import { Link } from 'react-router-dom'

export default function ProductItem({ firebaseApp, item, id, listGrid }) {
	return (
		<Item key={id} $list={listGrid}>
			<div className="overflow-hidden rounded-[0.5rem] hover:cursor-pointer">
				<Link to={`details/${item.id}`}>
					<img src={item.img} />
				</Link>
			</div>

			<div
				className={`flex justify-between mt-[1rem] ${
					listGrid ? 'flex flex-col mt-0' : ''
				}`}
			>
				<div
					className={`w-[200px] flex flex-col gap-[0.5rem] text-[0.8rem] ${
						listGrid ? 'flex items-start justify-end' : ''
					}`}
				>
					<p>{item.name}</p>
					<p>$ {item.price}</p>
				</div>
				<IconsContainer $condition>
					<i
						className="fi fi-rr-shopping-cart"
						onClick={() => firebaseApp.add(item, 'cart')}
					></i>
					<i
						className="fi fi-rr-heart"
						onClick={() => firebaseApp.add(item, 'favorites')}
					></i>
				</IconsContainer>
			</div>
		</Item>
	)
}
