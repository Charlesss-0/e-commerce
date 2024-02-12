import './styles/index.css'

import AppRoutes from './routes/routes'
import { CartProvider } from './context/context'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CartProvider>
			<Router>
				<AppRoutes />
			</Router>
		</CartProvider>
	</React.StrictMode>
)
