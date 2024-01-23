import { createContext, useContext, useState } from 'react'

const CartContext = createContext('')

export function CartProvider({ children }) {
	const [hide, setHide] = useState(false)

	return (
		<CartContext.Provider
			value={{
				hide,
				setHide,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	return useContext(CartContext)
}
