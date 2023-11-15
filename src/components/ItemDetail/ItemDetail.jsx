import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({name, img, description, price, stock}) => {
const onAdd = (items) =>{
  if (items > 1){
  alert(`Se agregaron ${items} items al carrito`)
  }
  else{
    alert("Se agregó 1 item al carrito")
  }
}

  return (
    <div className="flex flex-col items-center w-64 mx-auto border-2 rounded">
        <h4 className="w-auto text-2xl font-bold">{name}</h4>
        <img src={img} alt="Product picture" />
        <p className="text-xl">{description}</p>
        <p className="text-lg">Precio: {price}</p>
        <p className="text-lg">Stock: {stock}</p>
        <ItemCount stock={stock} onAdd={onAdd}  />
    </div>
  )
}
