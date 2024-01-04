import React from 'react'
import './styles/index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Routes from './components/routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={Routes}></RouterProvider>
	</React.StrictMode>
)
