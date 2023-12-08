import { useForm } from "react-hook-form";
import { CartContext } from "./context/CartContext";
import { useContext, useState } from "react";
//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const Checkout = () => {
  const [emailMatch, setEmailMatch] = useState(false);
  const [orderId, setOrderid] = useState("");

  const { cartList, totalPrice, emptyCart } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const buy = (data) => {
    const { email, confirmEmail } = data;

    if (email == confirmEmail) {
      setEmailMatch(false);

      const order = {
        client: data,
        products: cartList,
        total: totalPrice(),
      };

      const orderRef = collection(db, "orders");
      addDoc(orderRef, order).then((doc) => {
        setOrderid(doc.id);
        emptyCart();
      });
    } else {
      setEmailMatch(true);
    }
  };

  if (orderId) {
    return (
      <div className="mx-auto">
        <h1 className="text-3xl font-bold">Muchas gracias por su compra!</h1>
        <p className="font-semibold">El id de tu pedido es: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <form
        className="absolute flex flex-col gap-3 left-20 top-24 w-80 "
        action=""
        onSubmit={handleSubmit(buy)}
      >
        <h2 className="text-3xl font-bold">Formulario</h2>
        <input
          className="p-2 border-2 border-black rounded shadow"
          type="text"
          placeholder="Ingrese su nombre"
          {...register("name", { required: true })}
        />
        <input
          className="p-2 border-2 border-black rounded shadow"
          type="text"
          placeholder="Ingrese su apellido"
          {...register("surname", { required: true })}
        />
        <input
          className="p-2 border-2 border-black rounded shadow "
          type="text"
          placeholder="Ingrese su teléfono"
          {...register("number", { required: true })}
        />
        <input
          className="p-2 border-2 border-black rounded shadow "
          type="email"
          placeholder="Ingrese su e-mail"
          {...register("email", { required: true })}
        />
        <input
          className="p-2 border-2 border-black rounded shadow"
          type="email"
          placeholder="Repita su e-mail"
          {...register("confirmEmail", { required: true })}
        />
        {emailMatch && (
          <p className="text-xl font-bold"> Los correos no coinciden </p>
        )}
        <button
          className="p-1 transition-all rounded-xl bg-zinc-400 hover:bg-zinc-300"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
