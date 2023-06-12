import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const Item = ({id, titulo, precio,img, stock}) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    
    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = {id, titulo, precio};
        agregarProducto (item, cantidad);
    }
    
    return (
        <div className='cardProductos'>
            <img src={img} alt= {titulo} />
            <h3>{titulo}</h3>
            <p>Precio: $ {precio}</p>
            <p>ID: {id}</p>
            <Link className='link' to={`/item/${id}`}>Más información</Link>
            {agregarCantidad > 0 ? (<Link className='link' to ="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)}
        </div>
    )
}

export default Item
