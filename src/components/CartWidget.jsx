import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./context/CartContext";

export const CartWidget = () => {
  const { calcItemsQty } = useContext(CartContext);

  return (
    <div className="flex">
      <FaShoppingCart color="white" size={20} />
      <p className="mx-2 font-bold text-black">{calcItemsQty()}</p>
    </div>
  );
};
