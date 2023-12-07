import { Item } from "./Item"

export const ItemList = ({ products }) => {
  return (
    <>
      <div className="grid w-screen grid-cols-4 gap-y-8">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  )
}
