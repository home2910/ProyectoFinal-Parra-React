import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-500">
      <div className="flex justify-evenly">
        <ul className="flex gap-3 ml-60">
          <li>
            {" "}
            <Link to={"/"}>
              {" "}
              <button className="p-2 text-white bg-green-700 rounded-2xl hover:bg-green-800">
                Home
              </button>{" "}
            </Link>{" "}
          </li>

          <li>
            {" "}
            <Link to={"category/remeras"}>
              {" "}
              <button className="p-2 text-white bg-green-700 rounded-2xl hover:bg-green-800">
                Remeras
              </button>{" "}
            </Link>{" "}
          </li>

          <li>
            {" "}
            <Link to={"category/pantalones"}>
              {" "}
              <button className="p-2 text-white bg-green-700 rounded-2xl hover:bg-green-800">
                Pantalones
              </button>{" "}
            </Link>{" "}
          </li>

          <li>
            {" "}
            <Link to={"category/calzados"}>
              {" "}
              <button className="p-2 text-white bg-green-700 rounded-2xl hover:bg-green-800">
                Calzados
              </button>{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div>
        <Link to={"/"}>
          <h3 className="text-3xl font-bold">Clothes Sell</h3>
        </Link>
      </div>

      <Link to={"/carrito"}>
        <CartWidget />
      </Link>
    </nav>
  )
}

export default NavBar
