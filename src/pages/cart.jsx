import { CartItem, EmptyMessage, SubHeading } from '../components'
import {
	Loader,
	Overlay,
	PopUpContainer,
} from '../components/styled-components'
import { fetchData } from '../utils'
import { useEffect, useState } from 'react'

import FirebaseApp from '../firebase/firebase'
import { useAppContext } from '../context/context'

export function Cart() {
	const firebaseApp = new FirebaseApp()
	const [data, setData] = useState([])
	const { hideCart, setHideCart, setCartCount, isSignedIn, setIsSignedIn } =
		useAppContext()
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

	useEffect(() => {
		setIsSignedIn(!!firebaseApp.auth.currentUser)
	}, [firebaseApp.auth.currentUser])

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
								data.map(({ key, value }) => (
									<CartItem
										key={key}
										id={key}
										data={value}
										firebaseApp={firebaseApp}
									/>
								))
							) : (
								<>
									{isSignedIn ? (
										<EmptyMessage>Cart is empty!</EmptyMessage>
									) : (
										<EmptyMessage>
											Sign in to add items to the cart
										</EmptyMessage>
									)}
								</>
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
