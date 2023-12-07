import React, { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  const addToCart = (item, quantity) => {
    const itemAdded = { ...item, quantity }

    const newCart = [...cartList]
    const isInCart = newCart.find((product) => product.id === itemAdded.id)

    if (isInCart) {
      isInCart.quantity += quantity
      setCartList(newCart)
    } else {
      setCartList([...cartList, itemAdded])
    }
  }

  const calcItemsQty = () => {
    return cartList.reduce((acc, prod) => acc + prod.quantity, 0)
  }

  // Funciones no utilizadas actualmente
  // const removeList = () => {}
  // const deleteItem = (id) => {}

  const objProvider = {
    addToCart,
    // removeList,
    // deleteItem,
    calcItemsQty,
  }

  return (
    <CartContext.Provider value={objProvider}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider
