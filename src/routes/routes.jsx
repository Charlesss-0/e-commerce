import App from '../App'
import { Cart } from '../pages/cart'
import ErrorPage from '../pages/error/errorPage'
import { Favorites } from '../pages/favorites'
import Products from '../pages/shop/products'
import { createBrowserRouter } from 'react-router-dom'

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'favorites',
				element: <Favorites />,
			},
		],
	},
	{
		path: 'products',
		element: <Products />,
		children: [
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'favorites',
				element: <Favorites />,
			},
		],
	},
]

const Routes = createBrowserRouter(routes)

export default Routes
