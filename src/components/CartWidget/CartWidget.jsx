import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <div className="d-flex">
    <FaShoppingCart color="white" size={20}  />
    <p className="mx-2">0</p>
    </div>
  )
}

export default CartWidget