import { Link } from "react-router-dom"



export const Item = ({id, name, img, description}) => {
  return (
    <div className="flex flex-col items-center w-48 mx-auto border-2 rounded">
        <h4 className="text-2xl">{name}</h4>
        <img className="w-40 border-black border-1" src={img} alt="Item Img" />
        <p className="">{description}</p>
        <Link to={`/item/${id}`}>
        <button className="p-1 mb-1 bg-gray-400 border-2 rounded-md"> Ver detalles </button> 
        </Link>
    </div>
  )
}
