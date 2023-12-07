import { FaShoppingCart } from "react-icons/fa"

export const CartWidget = () => {
  return (
    <div className="flex">
      <FaShoppingCart color="white" size={20} />
      <p className="mx-2"></p>
    </div>
  )
}
