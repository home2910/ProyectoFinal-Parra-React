import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../async-mocks";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  // Creamos un state que nos permite setear el estado de carga de los productos, inicializa en true
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {

    setIsLoading(true); 
    getProducts()
      .then((resp) => {
      
        if(category) {
         
        const productsFilter = resp.filter(product => product.category === category);

        setProducts(productsFilter);

        setIsLoading(false);
        
        } else {
          
          setProducts(resp);
        setIsLoading(false);
          
        }
 
      })
      .catch((error) => console.log(error));
  }, [category]); 


  return (
    <div className="flex flex-col gap-10">
      <h1 className="mx-auto "> {greeting} </h1>
      <div className="flex">
      { isLoading ? <h2 className="text-2xl font-bold">Cargando productos ..</h2> : <ItemList products={products} /> }
      </div>
    </div>
  )}