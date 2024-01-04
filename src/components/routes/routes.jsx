import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Error from '../../error'
import Products from '../shop/products'

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
	},
	{
		path: 'home/',
		element: <App />,
	},
	{
		path: 'products/',
		element: <Products />,
	},
]

const Routes = createBrowserRouter(routes)

export default Routes
