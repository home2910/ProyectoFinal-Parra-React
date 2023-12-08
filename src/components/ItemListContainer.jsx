import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { useState, useEffect } from "react"

// Firebase
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../config/firebaseConfig"

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams()

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const prodReference = collection(db, "products")

    const qry = category
      ? query(prodReference, where("category", "==", category))
      : prodReference

    setTimeout(() => {
      getDocs(qry).then((resp) => {
        setProducts(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
      setIsLoading(false)
    }, 2000)
  }, [category])

  return (
    <div className="flex flex-col gap-10">
      <h1 className="mx-auto text-4xl font-bold"> {greeting} </h1>
      <div className="flex">
        {isLoading ? (
          <h2 className="text-2xl font-bold mx-auto">Cargando productos ..</h2>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </div>
  )
}
