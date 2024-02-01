import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/context'

const Header = styled.header`
	background: none;
	box-shadow: none;
	backdrop-filter: none;
	position: fixed;
	top: 0;
	width: 100%;
	padding: 1rem;
	z-index: 20;
	transition: all 400ms;

	&:hover {
		background: #fffa;
		box-shadow: 1px 1px 5px #0005;
		backdrop-filter: blur(1rem);
	}

	${props =>
		props.$primary &&
		`
	background: #fffa;
	box-shadow: 1px 1px 5px #0005;
	backdrop-filter: blur(1rem);
	`}
`

const SearchField = styled.div`
	width: 8.5em;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	background: #fff;
	outline: 1px solid #afafaf;
	border-radius: 100em;
	transition: all 500ms;

	${props =>
		props.$focus &&
		`
		width: 30em;
	`}
`

const SearchInput = styled.input`
	font-family: 'Nunito Sans', sans-serif;
	background: inherit;
	outline: none;
	width: 100%;

	&::placeholder {
		color: #aaa;
		font-family: 'Nunito Sans', sans-serif;
	}

	&::-webkit-search-cancel-button {
		display: none;
		-webkit-appearance: none;
	}
`

const Item = styled.li`
	padding: 0.3rem 1rem;
	color: #5f5f5f;

	&:hover {
		cursor: pointer;
		color: #000;
	}

	${props =>
		props.$selected &&
		`
		color: #000;

		&:hover {
			cursor: pointer;
		}
	`}
`

const Indicator = styled.div`
	width: 12px;
	height: 12px;
	position: absolute;
	top: -12px;
	right: -12px;
	border-radius: 50%;

	${props => props.$active && `background: #9EC8B9;`}
`

export default function HeaderContent() {
	const menuItems = ['Home', 'Products', 'About']

	const location = useLocation()
	const {
		isScrolled,
		setIsScrolled,
		hideCart,
		setHideCart,
		hideFav,
		setHideFav,
		cartCount,
		favCount,
	} = useAppContext()
	const [focus, setFocus] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isScrolled])

	const handleFocus = () => {
		setFocus(!focus)
	}

	return (
		<Header $primary={isScrolled}>
			<div className="flex items-center pl-[1rem]">
				<h1 className="grow text-[2rem] font-bold tracking-[0.3rem]">
					<Link to={'/'}>GC</Link>
				</h1>

				<SearchField
					onFocus={handleFocus}
					onBlur={handleFocus}
					$focus={focus}
					tabIndex={1}
				>
					<i className="fi fi-rr-search"></i>
					<SearchInput
						type="search"
						name="search-input"
						placeholder="Search..."
						autoComplete="off"
					/>
				</SearchField>

				<div className="flex items-center gap-[2.5rem] ml-[3rem] p-[0.5rem] text-[1.3rem] [&>i]:text-[1.3rem] [&>i]:hover:cursor-pointer">
					<Link to="cart">
						<i
							className="fi fi-rr-briefcase-blank relative"
							onClick={() => setHideCart(!hideCart)}
						>
							<Indicator $active={cartCount} />
						</i>
					</Link>
					<Link to="favorites">
						<i
							className="fi fi-rr-heart relative"
							onClick={() => setHideFav(!hideFav)}
						>
							<Indicator $active={favCount} />
						</i>
					</Link>
					<i className="fi fi-rr-user"></i>
				</div>
			</div>

			<ul className="flex gap-[1.5rem] mt-[2rem]">
				{menuItems.map((item, index) => (
					<Link
						to={`${
							item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`
						}`}
						key={index}
					>
						<Item
							$selected={
								location.pathname.includes(`/${item.toLowerCase()}`) ||
								(location.pathname === '/' && item.toLowerCase() === 'home')
							}
						>
							{item}
						</Item>
					</Link>
				))}
			</ul>
		</Header>
	)
}
