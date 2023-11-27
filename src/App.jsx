import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  Cart,
  ItemDetailContainer,
  ItemListContainer,
  NavBar,
} from "./components"

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
