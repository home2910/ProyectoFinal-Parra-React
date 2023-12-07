import { Link } from "react-router-dom"

export const Cart = () => {
  return (
    <div className="flex justify-center">
      <h1 className="text-6xl font-bold"> Carrito </h1>

      <Link to="/checkout">
        <button className="p-1 text-white bg-green-500 border-2 rounded-xl">
          Finalizar compra
        </button>
      </Link>
    </div>
  )
}
