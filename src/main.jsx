import React from 'react'
import './styles/index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Routes from './components/routes/routes'
import { CartProvider } from './components/context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CartProvider>
			<RouterProvider router={Routes}></RouterProvider>
		</CartProvider>
	</React.StrictMode>
)
