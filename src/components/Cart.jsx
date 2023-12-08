/* eslint-disable no-extra-semi */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { VscError } from "react-icons/vsc";

export const Cart = () => {
  const { cartList, totalPrice, emptyCart, deleteItem } =
    useContext(CartContext);

  const HandleEmptyCart = () => {
    emptyCart();
  };
  return (
    <div className="flex flex-col gap-5 text-xl font-semibold">
      <h1 className="mx-auto text-6xl font-bold"> Carrito </h1>

      {cartList.map((prod) => {
        return (
          <div
            className="flex justify-around border-2 border-gray-500 rounded"
            key={prod.id}
          >
            <h3>{prod.name}</h3>
            <p>Precio unitario: ${prod.price}</p>
            <p>Cantidad: {prod.qty}</p>
            <p>Precio total: ${prod.price * prod.qty}</p>
            <button onClick={() => deleteItem(prod.id)}>
              <VscError />
            </button>
          </div>
        );
      })}

      {cartList.length > 0 ? (
        <h2 className="mx-auto text-2xl font-bold">
          {" "}
          Precio total de productos: ${totalPrice()}
        </h2>
      ) : (
        <h2 className="mx-auto text-xl font-bold">El carrito esta vacío</h2>
      )}

      <div className="flex justify-center">
        <button
          className="p-1 text-white bg-red-500 border-2 rounded-xl"
          onClick={HandleEmptyCart}
        >
          Vaciar carrito
        </button>

        <Link to="/checkout">
          <button className="p-1 text-white bg-green-500 border-2 rounded-xl">
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
};
