import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Header = styled.header`
	background: none;
	box-shadow: none;
	backdrop-filter: none;
	position: fixed;
	top: 0;
	width: 100%;
	padding: 1rem;
	z-index: 1;

	${props =>
		props.$primary &&
		`
	background: #fff3;
	box-shadow: 1px 1px 5px #0005;
	backdrop-filter: blur(10px);
	`}
`

const SearchField = styled.div`
	width: 18em;
	background: #fff;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	border: 1px solid #000;
	transition: all 500ms;

	${props =>
		props.$focus &&
		`
		width: 25em;
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
	border-radius: 100em;

	&:hover {
		cursor: pointer;
	}

	${props =>
		props.$selected &&
		`
		background: #fff;
		border: solid 1px #aaa;
	`}
`

export default function HeaderContent() {
	const [isScrolled, setIsScrolled] = useState(0)
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

	const menuItems = [
		{ name: 'Products' },
		{ name: 'Contact us' },
		{ name: 'New' },
	]

	const handleFocus = () => {
		setFocus(!focus)
	}

	return (
		<Header $primary={isScrolled}>
			<div className="flex">
				<h1 className="grow text-[1.5rem] font-bold tracking-[0.3rem]">GC</h1>

				<SearchField onFocus={handleFocus} onBlur={handleFocus} $focus={focus}>
					<i className="fi fi-rr-search"></i>
					<SearchInput
						type="search"
						name="search-input"
						placeholder="Search..."
						autoComplete="off"
					/>
				</SearchField>

				<div className="flex items-center gap-[1.5rem] ml-[3rem] [&>i]:text-[1.3rem] [&>i]:hover:cursor-pointer">
					<i className="fi fi-rr-shopping-cart"></i>
					<i className="fi fi-rr-heart"></i>
					<i className="fi fi-rr-circle-user"></i>
				</div>
			</div>

			<ul className="flex gap-[1.5rem] mt-[2rem]">
				{menuItems.map((item, index) => (
					<Item key={index} $selected={index === 0}>
						{item.name}
					</Item>
				))}
			</ul>
		</Header>
	)
}
