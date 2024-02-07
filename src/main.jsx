import React from 'react'
import './styles/index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/routes'
import { CartProvider } from './context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CartProvider>
			<Router>
				<AppRoutes />
			</Router>
		</CartProvider>
	</React.StrictMode>
)
