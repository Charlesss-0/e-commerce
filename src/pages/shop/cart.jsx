import { CartItem, EmptyMessage, SubHeading } from '../../components'
import {
	Loader,
	Overlay,
	PopUpContainer,
} from '../../components/styled_components'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import FirebaseApp from '../../firebase/firebase'
import { fetchData } from '../../utils'
import { useAppContext } from '../../context/context'

export function Cart() {
	const firebaseApp = new FirebaseApp()
	const [data, setData] = useState([])
	const { setCartCount, isSignedIn, setIsSignedIn } = useAppContext()
	const [isEmpty, setIsEmpty] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const location = useLocation()
	const currentPath = location.pathname.includes('cart')
	const navigate = useNavigate()

	useEffect(() => {
		fetchData(setIsLoading, setData, 'cart')
	}, [firebaseApp.database])

	useEffect(() => {
		if (data.length > 0) {
			setIsEmpty(true)
			setCartCount(true)
		} else {
			setIsEmpty(false)
			setCartCount(false)
		}
	}, [data])

	useEffect(() => {
		document.body.style.overflow = currentPath ? 'hidden' : 'auto'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [currentPath])

	useEffect(() => {
		setIsSignedIn(!!firebaseApp.auth.currentUser)
	}, [firebaseApp.auth.currentUser])

	const goBack = () => {
		navigate(-1)
	}

	return (
		<Overlay>
			<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-start gap-[1rem]">
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
					onClick={goBack}
					className="fi fi-rr-cross-circle text-[1.5rem] rounded-full p-[0.5rem] bg-[#efefefaa] box-shadow hover:bg-[#2f2f2faa] hover:text-white hover:cursor-pointer transition-all duration-400"
				></i>
			</div>
		</Overlay>
	)
}
