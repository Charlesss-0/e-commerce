import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Error from '../../error'
import Shop from '../shop/shop'

const router = createBrowserRouter([
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
		path: 'shop/',
		element: <Shop />,
	},
])

export default router
