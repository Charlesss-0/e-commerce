import {
	IconsContainer,
	Overlay,
	Loader,
	PopUpContainer,
} from '../components/styled-components'
import { EmptyMessage, SubHeading } from '../components'
import { fetchData, updateCount } from '../utils'

import FirebaseApp from '../firebase/firebase'
import { useEffect, useState } from 'react'
import { useAppContext } from '../context/context'

export function Cart() {
	const firebaseApp = new FirebaseApp()
	const [data, setData] = useState([])
	const { hideCart, setHideCart, setCartCount } = useAppContext()
	const [isEmpty, setIsEmpty] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		fetchData(setIsLoading, setData, 'cart')
	}, [firebaseApp.database])

	useEffect(() => {
		if (data.length === 0) {
			setIsEmpty(false)
			setCartCount(false)
		} else {
			setIsEmpty(true)
			setCartCount(true)
		}
	}, [data])

	useEffect(() => {
		document.body.style.overflow = hideCart ? 'hidden' : 'auto'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [hideCart])

	return (
		<Overlay className={hideCart ? 'block' : 'hidden'}>
			<div
				className={
					hideCart
						? 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-start gap-[1rem]'
						: 'hidden'
				}
			>
				<PopUpContainer>
					<SubHeading>Cart</SubHeading>
					{isLoading ? (
						<Loader />
					) : (
						<ul className="flex flex-col gap-[1rem] h-full pb-[3rem] overflow-auto rounded-[0.5rem]">
							{isEmpty ? (
								<>
									{data.map(({ key, value }) => (
										<li
											key={key}
											className="flex justify-between items-center p-[0.8rem] rounded-[0.5rem] bg-[#efefef] box-shadow"
										>
											<div className="flex gap-[1rem] text-[0.8rem] [&>img]:w-[100px] [&>img]:rounded-[0.3rem] [&>img]:border-solid [&>img]:border-2 [&>img]:border-[#aaa]">
												<img src={value.img} />
												<div className="flex flex-col justify-between">
													<div>
														<p>{value.details}</p>
														<p>$ {value.price}</p>
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
														onClick={() => updateCount(key, 'subtract')}
													></i>
													<p className="select-none text-center w-[40px]">
														{value.count}
													</p>
													<i
														className="fi fi-rr-add"
														onClick={() => updateCount(key, 'add')}
													></i>
												</div>
												<i
													className="fi fi-rr-trash hover:cursor-pointer"
													onClick={() => firebaseApp.delete(key, 'cart')}
												></i>
											</div>
										</li>
									))}
								</>
							) : (
								<EmptyMessage>Cart is empty!</EmptyMessage>
							)}
						</ul>
					)}
				</PopUpContainer>
				<i
					onClick={() => setHideCart(!hideCart)}
					className="fi fi-rr-cross-circle text-[1.5rem] rounded-full p-[0.5rem] bg-[#efefefaa] box-shadow hover:bg-[#2f2f2faa] hover:text-white hover:cursor-pointer transition-all duration-400"
				></i>
			</div>
		</Overlay>
	)
}
