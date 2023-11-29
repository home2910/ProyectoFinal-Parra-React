import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  const addToCart = (item, quantity) => {}

  const removeList = () => {}

  const deleteItem = (id) => {}

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeList, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
