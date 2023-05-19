import {useState, useEffect} from 'react'
import { getUnProducto } from '../../asyncmock.jsx'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect (()=>{
        getUnProducto(idItem)
            .then(res => setProducto (res));
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer
