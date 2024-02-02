import { useEffect, useState } from 'react'
import FirebaseApp from '../firebase/firebase'
import { useAppContext } from '../context/context'
import {
	IconsContainer,
	Overlay,
	Loader,
	PopUpContainer,
} from '../components/styled-components'
import { EmptyMessage } from '../components'
import { fetchData } from '../utils/fetchData'

export function Favorites() {
	const firebaseApp = new FirebaseApp()
	const [data, setData] = useState([])
	const { hideFav, setHideFav, setFavCount } = useAppContext()
	const [isEmpty, setIsEmpty] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		fetchData(setIsLoading, setData, 'favorites')
	}, [firebaseApp.database])

	useEffect(() => {
		if (data.length === 0) {
			setIsEmpty(false)
			setFavCount(false)
		} else {
			setIsEmpty(true)
			setFavCount(true)
		}
	}, [data])

	useEffect(() => {
		document.body.style.overflow = hideFav ? 'hidden' : 'auto'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [hideFav])

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
										<li
											key={key}
											className="flex flex-col gap-[1rem] h-[max-content] mb-[2rem] rounded-[0.5rem] p-[0.8rem] bg-[#efefefaa] box-shadow [&>img]:w-[250px]  [&>img]:rounded-[0.5rem] [&>img]:shadow-md"
										>
											<img src={value.img} alt={value.details} />
											<div className="flex justify-between">
												<div>
													<p>{value.details}</p>
													<p>$ {value.price}</p>
												</div>
												<IconsContainer>
													<i
														onClick={() => firebaseApp.delete(key, 'favorites')}
														className="fi fi-rr-heart"
													></i>
												</IconsContainer>
											</div>
										</li>
									))}
								</>
							) : (
								<EmptyMessage>Favorites is empty!</EmptyMessage>
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
