import { useState, useEffect } from 'react'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			const scrollThreshold = 100

			setIsScrolled(scrollY > scrollThreshold)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const menuItems = [
		{ name: 'Women' },
		{ name: 'Men' },
		{ name: 'Kids' },
		{ name: 'Sports' },
		{ name: 'Brands' },
		{ name: 'New' },
	]

	return (
		<header
			className={`fixed top-0 w-full p-[1rem] shadow-md bg-white/40 z-10 ${
				isScrolled ? '' : 'hidden'
			}`}
		>
			<div className="flex">
				<h1 className="grow text-[1.5rem] font-bold tracking-[0.3rem]">QC</h1>

				<div className="bg-[#efefef] rounded-[50em] p-[0.5rem] px-[1rem] flex items-center gap-[1rem]">
					<i className="fi fi-rr-search"></i>
					<input
						type="search"
						name="search-query"
						placeholder="Search..."
						className="bg-[#efefef] outline-none"
					/>
				</div>

				<div className="flex items-center gap-[1.5rem] ml-[3rem] [&>i]:text-[1.3rem] [&>i]:hover:cursor-pointer">
					<i className="fi fi-rr-shopping-cart"></i>
					<i className="fi fi-rr-heart"></i>
					<i className="fi fi-rr-circle-user"></i>
				</div>
			</div>

			<ul className="flex gap-[1.5rem] mt-[2rem]">
				{menuItems.map((item, index) => (
					<li
						key={index}
						className={`${
							index === 0 ? 'bg-[#efefef]' : ''
						} p-[0.3rem] px-[1rem] rounded-full hover:cursor-pointer`}
					>
						{item.name}
					</li>
				))}
			</ul>
		</header>
	)
}
