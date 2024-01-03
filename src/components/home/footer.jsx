import styled from 'styled-components'

const ContactInfo = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	background: #b6c4b6;
	padding: 2rem 0;

	& > div {
		width: 350px;
	}

	& > div h1 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	& > div > ul {
		display: grid;
		gap: 0.5rem;

		& > li {
			justify-self: start;
		}
	}

	& > div > p,
	& > div > ul > li {
		color: #2f2f2f;
	}

	& > div > ul > li:hover {
		text-decoration: underline;
	}

	& > div > form > input {
		font-family: 'Nunito Sans', sans-serif;
	}
`

export default function Footer() {
	const links = {
		info: ['Home', 'Contact us', 'About us'],
		account: ['My Account', 'Check Out', 'Help', 'Support', 'FAQ'],
		contact: [
			{
				item: 'House No. 00, Road 55, Apt 100, Seattle',
				icon: 'fi fi-sr-marker',
			},
			{
				item: '+1 (888)-888-8888',
				icon: 'fi fi-sr-phone-flip',
			},
			{
				item: 'randomemail@gmail.com',
				icon: 'fi fi-sr-envelope',
			},
		],
	}

	return (
		<footer className="mt-[5rem]">
			<ContactInfo>
				<div>
					<h1>GC</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>

				<div>
					<h1>People</h1>
					<ul>
						{links.account.map((link, index) => (
							<li key={index}>
								<a href="#">{link}</a>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h1>Contact us</h1>
					<ul>
						{links.contact.map((link, index) => (
							<li key={index} className="flex items-center gap-[0.5rem]">
								<i className={`${link.icon} flex`}></i>
								<a href="#" target="_blank" rel="noreferrer">
									{link.item}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h1>Join to Newsletter</h1>
					<p className="mb-[1rem]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua
					</p>
					<form onSubmit={e => e.preventDefault()}>
						<label htmlFor="email"></label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email"
							className="rounded-[1em] px-[1rem] py-[0.3rem] outline-none"
						/>
						<button className="bg-[#637E76] px-[1rem] py-[0.3rem] rounded-[1rem] ml-[1rem] text-white hover:cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-100">
							Send
						</button>
					</form>
				</div>
			</ContactInfo>

			<div className="flex justify-between px-[5rem] py-[1rem]">
				<a
					href="https://github.com/Charlesss-0"
					target="_blank"
					rel="noreferrer"
					className="hover:underline"
				>
					&copy; CharlesDev
				</a>
				<ul className="flex gap-[2rem]">
					{links.info.map((link, index) => (
						<li key={index} className="hover:underline">
							<a href="#">{link}</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
