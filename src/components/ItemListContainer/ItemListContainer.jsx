import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../services/config"

const ItemListContainer = (props) => {
        const [productos, setProductos] = useState([]);

        const {idCategoria} = useParams();

        useEffect ( ()=>{
            const misProductos = idCategoria ? query(collection(db, "inventario"), where ("idCat", "==", idCategoria)) : collection(db, "inventario"); 
            
            getDocs(misProductos)
            .then(res =>  {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return  {id:doc.id, ...data} 
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.error)
        }, [idCategoria])
        
    return (
        <div>
            <h1 className='titulo'>¡Bienvenido/a!</h1>
            <h2 className='subtitulo'>A continuación podrá ver nuestra selección de tortas</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer