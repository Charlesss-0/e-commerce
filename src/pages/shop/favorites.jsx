import { EmptyMessage, FavoritesItem } from '../../components'
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

export function Favorites() {
	const firebaseApp = new FirebaseApp()
	const [data, setData] = useState([])
	const { setFavCount, isSignedIn, setIsSignedIn } = useAppContext()
	const [isEmpty, setIsEmpty] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const location = useLocation()
	const currentPath = location.pathname.includes('favorites')
	const navigate = useNavigate()

	useEffect(() => {
		fetchData(setIsLoading, setData, 'favorites')
	}, [firebaseApp.database])

	useEffect(() => {
		if (data.length > 0) {
			setIsEmpty(true)
			setFavCount(true)
		} else {
			setIsEmpty(false)
			setFavCount(false)
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
			<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex gap-[1rem] items-start">
				<PopUpContainer $activeClass>
					<h1 className="text-center text-[1.3rem] mb-[2rem]">Favorites</h1>
					{isLoading ? (
						<Loader />
					) : (
						<ul>
							{isEmpty ? (
								<>
									{data.map(({ key, value }) => (
										<FavoritesItem
											key={key}
											id={key}
											data={value}
											firebaseApp={firebaseApp}
										/>
									))}
								</>
							) : (
								<>
									{isSignedIn ? (
										<EmptyMessage>Favorites is empty!</EmptyMessage>
									) : (
										<EmptyMessage>
											Sign in to add your favorite items
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
