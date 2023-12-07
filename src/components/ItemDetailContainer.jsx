import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"

// Firebase
import { doc, getDoc } from "firebase/firestore"
import { db } from "../config/firebaseConfig"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const docReference = doc(db, "products", id)
    getDoc(docReference).then((resp) =>
      setProduct({ ...resp.data(), id: resp.id })
    )
  }, [id])
  return <div>{product && <ItemDetail {...product} />}</div>
}
