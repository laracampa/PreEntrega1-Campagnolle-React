import './ItemListContainer.css'
import {useState} from 'react'
import { getProductos } from '../../asyncmock.jsx'
import ItemList from '../ItemList/ItemList'
import { useEffect } from 'react' 

const ItemListContainer = (props) => {
        const [productos, setProductos] = useState([]);

        useEffect ( ()=>{
            getProductos()
                .then(res => setProductos(res))
                .catch(error => console.error(error))
        }, [])
    return (
        <div>
            <h1 className='titulo'>¡Bienvenido/a! <br />
            {props.greeting} </h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer