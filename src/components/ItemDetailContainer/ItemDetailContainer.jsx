import {useState} from 'react'
import { useEffect } from 'react' 
import { getUnProducto } from '../../asyncmock.jsx'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect (()=>{
        getUnProducto("torta1")
            .then(res => setProducto (res));
    }, [])

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer
