import { Overlay } from './cart'
import styled from 'styled-components'
import { useCart } from '../context/context'

const FavoritesContent = styled.div`
	width: 80vw;
	height: 90vh;
	background: #fafafa99;
	border-radius: 1rem;
	padding: 1rem;
	backdrop-filter: blur(1rem);

	&::-webkit-scrollbar {
		display: none;
	}
`

export function Favorites() {
	const { hideFav, setHideFav } = useCart()

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
				<FavoritesContent
					className={hideFav ? 'block' : 'hidden'}
				></FavoritesContent>
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
