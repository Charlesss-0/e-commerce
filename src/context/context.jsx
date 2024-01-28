import { createContext, useContext, useState } from 'react'

const CartContext = createContext('')

export function CartProvider({ children }) {
	const [hideCart, setHideCart] = useState(false)
	const [hideFav, setHideFav] = useState(false)
	const [isScrolled, setIsScrolled] = useState(0)

	return (
		<CartContext.Provider
			value={{
				hideCart,
				setHideCart,
				hideFav,
				setHideFav,
				isScrolled,
				setIsScrolled,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export function useAppContext() {
	return useContext(CartContext)
}
