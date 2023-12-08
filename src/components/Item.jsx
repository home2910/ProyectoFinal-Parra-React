import { Link } from "react-router-dom"

export const Item = ({ product }) => {
  return (
    <div className="flex flex-col items-center w-48 mx-auto border-2 rounded">
      <h4 className="text-2xl">{product.name}</h4>
      <img
        className="w-40 border-black rounded-xl border-1"
        src={product.img}
        alt="Item Img"
      />
      <p className="">{product.description}</p>
      <Link to={`/item/${product.id}`}>
        <button className="p-1 text-white transition-all bg-gray-400 border-2 rounded hover:bg-gray-300 hover:font-bold">
          Ver detalles
        </button>
      </Link>
    </div>
  )
}
