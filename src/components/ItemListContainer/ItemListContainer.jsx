import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../async-mocks";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  // Creamos un state que nos permite setear el estado de carga de los productos, inicializa en true
  const [isLoading, setIsLoading] = useState(true);


  // Con nuestro useEffect llamamos nuestros productos  
  useEffect(() => {

    setIsLoading(true); // Cada ves que se cargue nuestro componente vamos a setear en true el isLoading para que nos aparezca la carga 
    getProducts()
      .then((resp) => {
        // Si existe una category en el parámetro 
        if(category) {
          // Filtramos los productos de la respuesta por la categoría recibida por parámetro
        const productsFilter = resp.filter(product => product.category === category);
        // Almacenamos en nuestro state los productos filtrados
        setProducts(productsFilter);
        // Pasamos isLoading a false para que se rendericen los productos filtrados
        setIsLoading(false);
        
        } else {
          // En caso que no tengamos ninguna categoría en los parámetros directamente seteamos todos los productos en el state products
          setProducts(resp);
        setIsLoading(false);
          
        }
 
      })
      .catch((error) => console.log(error));
  }, [category]); // En el array de dependencia controlamos si se modifica el valor de la category para recargar el componente


  return (
    <div className="flex flex-col gap-10">
      <h1 className="mx-auto "> {greeting} </h1>
      {/* si isLoading está en true va a mostrar Cargando productos... pero cuando se pase a false va a renderizar los productos */}
      <div className="flex">
      { isLoading ? <h2 className="text-2xl font-bold">Cargando productos ..</h2> : <ItemList products={products} /> }
      </div>
    </div>
  )}