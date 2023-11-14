import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <>
      <div className="flex-wrap d-flex">
        {products.map((product) => (
          
          <Item key={product.id} {...product} /> ))}
      </div>
    </>
  );
};