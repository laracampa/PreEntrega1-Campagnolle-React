import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({id, titulo, precio, img, stock, info}) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    
    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = {id, titulo, precio};
        agregarProducto (item, cantidad);
    }
    
    return (
        <div className="cardProducto">
            <h3>{titulo}</h3>
            <img src= {img} alt= {titulo} />
            <p>{info}</p>
            <p>Precio: $ {precio}</p>
            {agregarCantidad > 0 ? (<Link to ="/cart" className='button'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)}
        </div>
    )
}

export default ItemDetail
