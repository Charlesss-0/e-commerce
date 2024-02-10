import App from '../App'
import { Cart } from '../pages/cart'
import ErrorPage from '../pages/error/errorPage'
import { Favorites } from '../pages/favorites'
import Products from '../pages/shop/products'
import AboutPage from '../pages/about'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => (
	<Routes onError={error => <ErrorPage error={error} />}>
		<Route path="/" element={<App />}>
			<Route path="cart" element={<Cart />} />
			<Route path="favorites" element={<Favorites />} />
		</Route>

		<Route path="products" element={<Products />}>
			<Route path="cart" element={<Cart />} />
			<Route path="favorites" element={<Favorites />} />
		</Route>

		<Route path="about" element={<AboutPage />}>
			<Route path="cart" element={<Cart />} />
			<Route path="favorites" element={<Favorites />} />
		</Route>

		<Route path="*" element={<ErrorPage />} />
	</Routes>
)

export default AppRoutes
