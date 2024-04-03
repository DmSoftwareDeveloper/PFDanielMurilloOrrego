import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => 
{
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() =>
    {
        getDoc(doc(db, 'products', itemId))
          .then((response) => 
          {
            const product = {id: response.id, ...response.data()}
            setProduct(product)
          })
          .catch(error => 
          {
            console.error(error)
          })
          .finally(() => 
          {
            setLoading(false)
          })
    }, [itemId])
    return (
        <div className="ItemDetailContainer">
            {loading ? <h1>Cargando...</h1> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer