import './ItemListContainer.css'
import {useState} from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock.jsx'
import ItemList from '../ItemList/ItemList'
import { useEffect } from 'react' 
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
        const [productos, setProductos] = useState([]);

        const {idCategoria} = useParams();

        useEffect ( ()=>{

            const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

            funcionProductos (idCategoria)
                .then(res => setProductos(res))
                .catch(error => console.error(error))
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