import { IconsContainer } from './styled-components'
import { updateCount } from '../utils'

export default function CartItem({ id, data, firebaseApp }) {
	return (
		<li
			key={id}
			className="flex justify-between items-center p-[0.8rem] rounded-[0.5rem] bg-[#efefef] box-shadow"
		>
			<div className="flex gap-[1rem] text-[0.8rem] [&>img]:w-[100px] [&>img]:rounded-[0.3rem] [&>img]:border-solid [&>img]:border-2 [&>img]:border-[#aaa]">
				<img src={data.img} />
				<div className="flex flex-col justify-between">
					<div>
						<p>{data.details}</p>
						<p>$ {data.price}</p>
					</div>
					<IconsContainer>
						<i className="fi fi-rr-heart"></i>
					</IconsContainer>
				</div>
			</div>

			<div className="flex gap-[3rem] items-center px-[1rem]">
				<div className="flex items-center gap-[1rem] [&>i]:hover:cursor-pointer">
					<i
						className="fi fi-rr-minus-circle"
						onClick={() => updateCount(firebaseApp, id, 'subtract')}
					></i>
					<p className="select-none text-center w-[40px]">{data.count}</p>
					<i
						className="fi fi-rr-add"
						onClick={() => updateCount(firebaseApp, id, 'add')}
					></i>
				</div>
				<i
					className="fi fi-rr-trash hover:cursor-pointer"
					onClick={() => firebaseApp.delete(id, 'cart')}
				></i>
			</div>
		</li>
	)
}
