import { IconsContainer } from '../styled_components'

export default function FavoritesItem({ id, data, firebaseApp }) {
	return (
		<li
			key={id}
			className="flex flex-col gap-[1rem] h-[max-content] mb-[2rem] rounded-[0.5rem] p-[0.8rem] bg-[#efefefaa] box-shadow [&>img]:w-full  [&>img]:rounded-[0.5rem] [&>img]:shadow-md"
		>
			<img src={data.img} alt={data.name} />
			<div className="flex justify-between">
				<div>
					<p>{data.name}</p>
					<p>$ {data.price}</p>
				</div>
				<IconsContainer>
					<i
						onClick={() => firebaseApp.delete(id, 'favorites')}
						className="fi fi-rr-heart"
					></i>
				</IconsContainer>
			</div>
		</li>
	)
}
