export default function Header() {
	const menuItems = [
		{ name: 'Women' },
		{ name: 'Men' },
		{ name: 'Kids' },
		{ name: 'Sports' },
		{ name: 'Brands' },
		{ name: 'New' },
	]

	return (
		<header className="p-[1rem] border-b-solid border shadow-md">
			<div className="flex">
				<h1 className="grow text-[1.5rem] font-bold tracking-[0.3rem]">
					Forever 21
				</h1>

				<div className="bg-[#efefef] rounded-[50em] p-[0.5rem] px-[1rem] flex items-center gap-[1rem]">
					<i className="fi fi-rr-search"></i>
					<input
						type="search"
						name="search-query"
						placeholder="Search"
						className="bg-[#efefef] outline-none"
					/>
				</div>

				<div className="flex items-center gap-[1.5rem] ml-[3rem] [&>i]:text-[1.3rem]">
					<i className="fi fi-rr-shopping-cart"></i>
					<i className="fi fi-rr-heart"></i>
					<i className="fi fi-rr-circle-user"></i>
				</div>
			</div>

			<ul className="flex gap-[1.5rem] mt-[2rem]">
				{menuItems.map((item, index) => (
					<li
						key={index}
						className="bg-[#efefef] p-[0.4rem] px-[1rem] rounded-full hover:cursor-pointer"
					>
						{item.name}
					</li>
				))}
			</ul>
		</header>
	)
}
