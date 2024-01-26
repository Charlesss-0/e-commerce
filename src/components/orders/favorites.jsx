import { useEffect, useState } from 'react'
import FirebaseApp from '../../firebase/firebase'
import { useCart } from '../context/context'
import styled from 'styled-components'
import { Overlay } from './cart'
import { IconsContainer } from '../home/home'

const FavoritesContent = styled.div`
	width: 80vw;
	height: 90vh;
	background: #fafafa99;
	border-radius: 1rem;
	padding: 2rem;
	backdrop-filter: blur(1rem);

	& > ul::-webkit-scrollbar {
		display: none;
	}
`

export function Favorites() {
	const firebaseApp = new FirebaseApp()
	const [data, setData] = useState([])
	const { hideFav, setHideFav } = useCart()

	useEffect(() => {
		firebaseApp.fetch(setData, 'favorites')
	}, [])

	useEffect(() => {
		document.body.style.overflow = hideFav ? 'hidden' : 'auto'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [hideFav])

	return (
		<Overlay className={hideFav ? 'block' : 'hidden'}>
			<div
				className="
                    absolute
                    top-[50%]
                    left-[50%]
                    translate-x-[-50%]
                    translate-y-[-50%]
                    flex
                    gap-[1rem]
                    items-start
                    "
			>
				<FavoritesContent className={hideFav ? 'block' : 'hidden'}>
					<ul
						className="
						flex
						flex-wrap
						justify-around
						gap-[2rem]
						h-full
						overflow-auto
						"
					>
						{data.map(({ key, value }) => (
							<li
								key={key}
								className="
									flex
									flex-col
									gap-[1rem]
									mb-[2rem]
									[&>img]:w-[250px]
									[&>img]:rounded-[0.5rem]
									"
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
					</ul>
				</FavoritesContent>
				<i
					onClick={() => setHideFav(!hideFav)}
					className="
                        fi fi-rr-cross-circle 
                        text-[1.5rem] 
                        rounded-full 
                        p-[0.5rem] 
                        bg-[#efefefaa] 
                        box-shadow 
                        hover:bg-[#2f2f2faa] 
                        hover:text-white 
                        hover:cursor-pointer 
                        transition-all 
                        duration-400
                        "
				></i>
			</div>
		</Overlay>
	)
}
