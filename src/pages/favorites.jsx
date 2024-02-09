import {
	Loader,
	Overlay,
	PopUpContainer,
} from '../components/styled-components'
import { useEffect, useState } from 'react'

import { EmptyMessage, FavoritesItem } from '../components'
import FirebaseApp from '../firebase/firebase'
import { fetchData } from '../utils'
import { useAppContext } from '../context/context'

export function Favorites() {
	const firebaseApp = new FirebaseApp()
	const [data, setData] = useState([])
	const { hideFav, setHideFav, setFavCount, isSignedIn, setIsSignedIn } =
		useAppContext()
	const [isEmpty, setIsEmpty] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

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
		document.body.style.overflow = hideFav ? 'hidden' : 'auto'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [hideFav])

	useEffect(() => {
		setIsSignedIn(!!firebaseApp.auth.currentUser)
	}, [firebaseApp.auth.currentUser])

	return (
		<Overlay className={hideFav ? 'block' : 'hidden'}>
			<div
				className={
					hideFav
						? 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex gap-[1rem] items-start'
						: 'hidden'
				}
			>
				<PopUpContainer $activeClass>
					<h1 className="text-center text-[1.3rem] mb-[2rem]">Favorites</h1>
					{isLoading ? (
						<Loader />
					) : (
						<ul className="flex flex-wrap justify-around gap-[2rem] h-full pb-[3rem] overflow-auto">
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
					onClick={() => setHideFav(!hideFav)}
					className="fi fi-rr-cross-circle text-[1.5rem] rounded-full p-[0.5rem] bg-[#efefefaa] box-shadow hover:bg-[#2f2f2faa] hover:text-white hover:cursor-pointer transition-all duration-400"
				></i>
			</div>
		</Overlay>
	)
}
