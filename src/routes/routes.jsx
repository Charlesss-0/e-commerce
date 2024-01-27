import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Error from '../error'
import Products from '../components/shop/products'
import { Cart } from '../pages/cart'
import { Favorites } from '../pages/favorites'

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
	},
	{
		path: 'home/',
		element: <App />,
		children: [
			{
				path: 'cart/',
				element: <Cart />,
			},
			{
				path: 'favorites/',
				element: <Favorites />,
			},
		],
	},
	{
		path: 'products/',
		element: <Products />,
		children: [
			{
				path: 'cart/',
				element: <Cart />,
			},
			{
				path: 'favorites/',
				element: <Favorites />,
			},
		],
	},
]

const Routes = createBrowserRouter(routes)

export default Routes
