import {
	AboutPage,
	Cart,
	ErrorPage,
	Favorites,
	ProductDetails,
	Products,
} from '../pages'
import { Route, Routes } from 'react-router-dom'

import App from '../App'

const AppRoutes = () => (
	<Routes onError={error => <ErrorPage error={error} />}>
		<Route path="/" element={<App />}>
			<Route path="cart" element={<Cart />} />
			<Route path="favorites" element={<Favorites />} />
		</Route>

		<Route path="products" element={<Products />}>
			<Route path="cart" element={<Cart />} />
			<Route path="favorites" element={<Favorites />} />
			<Route path="details/:itemId" element={<ProductDetails />} />
		</Route>

		<Route path="about" element={<AboutPage />}>
			<Route path="cart" element={<Cart />} />
			<Route path="favorites" element={<Favorites />} />
		</Route>

		<Route path="*" element={<ErrorPage />} />
	</Routes>
)

export default AppRoutes
