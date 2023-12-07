import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  Cart,
  ItemDetailContainer,
  ItemListContainer,
  NavBar,
  Checkout,
} from "./components"
import CartContextProvider from "./components/context/CartContext"

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenido a mi tienda"} />}
          />
          <Route
            path="/category/:category"
            element={<ItemListContainer greeting={"Bienvenido a mi tienda"} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
