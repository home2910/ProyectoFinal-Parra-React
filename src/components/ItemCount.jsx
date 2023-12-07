export const ItemCount = ({ addToCart, handleRes, handleSum, count }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-44 ">
      <div className="flex justify-center bg-gray-500 w-44 border-3 rounded-3">
        <button
          className="px-4 bg-gray-400 rounded hover:bg-gray-300"
          onClick={handleRes}
        >
          -
        </button>
        <p className="px-4 font-bold">{count}</p>
        <button
          className="px-4 bg-gray-400 rounded hover:bg-gray-300"
          onClick={handleSum}
        >
          +
        </button>
      </div>
      <button
        className="p-1 text-white transition-all bg-gray-400 border-2 rounded hover:bg-gray-300 hover:font-bold "
        onClick={addToCart}
      >
        Agregar al carrito
      </button>
    </div>
  )
}
