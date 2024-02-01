import { createContext, useContext, useState } from 'react'

const PageContext = createContext('')

export function CartProvider({ children }) {
	const [hideCart, setHideCart] = useState(false)
	const [hideFav, setHideFav] = useState(false)
	const [isScrolled, setIsScrolled] = useState(0)
	const [cartCount, setCartCount] = useState(false)

	return (
		<PageContext.Provider
			value={{
				hideCart,
				setHideCart,
				hideFav,
				setHideFav,
				isScrolled,
				setIsScrolled,
				cartCount,
				setCartCount,
			}}
		>
			{children}
		</PageContext.Provider>
	)
}

export function useAppContext() {
	return useContext(PageContext)
}
