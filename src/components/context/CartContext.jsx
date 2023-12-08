import { useState, createContext, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(initialCart);

  const addToCart = (product, qty) => {
    const itemAdded = { ...product, qty };

    const newCart = [...cartList];
    const isInCart = cartList.find((product) => product.id === itemAdded.id);

    if (isInCart) {
      isInCart.qty += qty;
    } else {
      newCart.push(itemAdded);
    }
    setCartList(newCart);
    Toastify({
      text: "Item agregado al carrito",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  };

  const calcItemsQty = () => {
    return cartList.reduce((acc, prod) => acc + prod.qty, 0);
  };

  const totalPrice = () => {
    return cartList.reduce((acc, prod) => acc + prod.price * prod.qty, 0);
  };

  const emptyCart = () => {
    setCartList([]);
    Toastify({
      text: "Carrito vaciado",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  };

  const deleteItem = (productId) => {
    const updatedCart = cartList.filter((product) => product.id !== productId);
    setCartList(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        calcItemsQty,
        totalPrice,
        emptyCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
