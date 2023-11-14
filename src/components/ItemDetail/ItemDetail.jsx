import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({name, img, description, price, stock}) => {
const onAdd = (items) =>{
    alert(`Se agregaron ${items} al carrito`)
}

  return (
    <div>
        <h4>{name}</h4>
        <img src={img} alt="Product picture" />
        <p>{description}</p>
        <p>Precio: {price}</p>
        <ItemCount stock={stock} onAdd={onAdd}  />
    </div>
  )
}
