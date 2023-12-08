import { useContext, useState } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "./context/CartContext";

export const ItemDetail = ({ product }) => {
  const { cartList, addToCart } = useContext(CartContext);
  console.log(cartList);

  const [qty, setQty] = useState(1);

  const handleSum = () => {
    qty < product.stock && setQty(qty + 1);
  };

  const handleRes = () => {
    qty > 1 && setQty(qty - 1);
  };

  return (
    <div className="flex flex-col w-64 mx-auto border-2 rounded">
      <h4 className="w-auto mx-auto text-2xl font-bold">{product.name}</h4>
      <img src={product.img} alt="Product picture" />
      <div className="flex flex-col justify-start bg-zinc-200">
        <p className="mx-auto text-xl">{product.description}</p>
        <p className="mx-auto text-lg">Precio: {product.price}</p>
        <p className="mx-auto text-lg">Stock: {product.stock}</p>
        <ItemCount
          stock={product.stock}
          l
          handleSum={handleSum}
          handleRes={handleRes}
          qty={qty}
          addToCart={() => {
            addToCart(product, qty);
          }}
        />
      </div>
    </div>
  );
};
