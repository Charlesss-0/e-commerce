import HeaderContent from '../home/header'
import Footer from '../home/footer'
import { products } from '../data/data'
import { IconsContainer } from '../home/home'
import { Outlet } from 'react-router-dom'
import FirebaseApp from '../../firebase/firebase'

export default function Products() {
	const sections = [
		'All',
		'Bedroom',
		'Living Room',
		'Kitchen',
		'Workspace',
		'Bathroom',
	]
	const firebaseApp = new FirebaseApp()

	return (
		<>
			<HeaderContent />
			<div className="hero">
				<h1 className="text-[4.5rem] text-[#fff] font-bold text-shadow-sm">
					Up to <span className="text-[#B80000]">50%</span> discount this season
				</h1>
				<button className="Button">
					<span className="text-shadow-sm">View Products</span>
				</button>
			</div>

			<div className="productsContainer">
				<div>
					<ul className="flex gap-[0.5rem]">
						{sections.map((section, index) => (
							<li key={index}>{section}</li>
						))}
					</ul>
					<div className="flex items-center gap-[1.5rem] text-[1.3rem] text-[#5f5f5f] [&>i]:hover:cursor-pointer [&>i]:p-[1rem] [&>i]:rounded-full [&>i]:transition-all [&>i]:duration-400">
						<i className="fi fi-rr-apps flex hover:bg-[#f3f3f3]"></i>
						<i className="fi fi-rr-settings-sliders flex hover:bg-[#f3f3f3]"></i>
					</div>
				</div>

				<div className="listContainer">
					{products.map(category =>
						category.items.map((item, index) => (
							<div key={index} className="mt-[5rem]">
								<div className="w-[300px] overflow-hidden rounded-[0.5rem] hover:cursor-pointer">
									<img
										src={item.img}
										className="hover:scale-105 transition-all duration-[400ms]"
									/>
								</div>
								<div className="flex justify-between mt-[1rem]">
									<div className="w-[200px] flex flex-col gap-[0.5rem] text-[0.8rem]">
										<p>{item.details}</p>
										<p>$ {item.price}</p>
									</div>
									<IconsContainer>
										<i
											className="fi fi-rr-shopping-cart"
											onClick={() => firebaseApp.add(item, 'cart')}
										></i>
										<i className="fi fi-rr-heart"></i>
									</IconsContainer>
								</div>
							</div>
						))
					)}
				</div>
			</div>
			<Outlet />
			<Footer />
		</>
	)
}
