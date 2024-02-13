import { createContext, useContext, useState } from 'react'

const PageContext = createContext('')

export function CartProvider({ children }) {
	const [isScrolled, setIsScrolled] = useState(0)
	const [cartCount, setCartCount] = useState(false)
	const [favCount, setFavCount] = useState(false)
	const [isSignedIn, setIsSignedIn] = useState(false)

	return (
		<PageContext.Provider
			value={{
				isScrolled,
				setIsScrolled,
				cartCount,
				setCartCount,
				favCount,
				setFavCount,
				isSignedIn,
				setIsSignedIn,
			}}
		>
			{children}
		</PageContext.Provider>
	)
}

export function useAppContext() {
	return useContext(PageContext)
}
