import { createContext, useContext, useState } from 'react'

const CartContext = createContext('')

export function CartProvider({ children }) {
	const [hideCart, setHideCart] = useState(false)
	const [hideFav, setHideFav] = useState(false)

	return (
		<CartContext.Provider
			value={{
				hideCart,
				setHideCart,
				hideFav,
				setHideFav,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	return useContext(CartContext)
}
