import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({id, titulo, precio, img, stock}) => {
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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum fuga vel deserunt iure at. Iure, officiis. Minus culpa, vero architecto maxime saepe quidem, voluptatum rem tempora at non incidunt ipsum?</p>
            <p>Precio: $ {precio}</p>
            <p>ID: {id}</p>
            {agregarCantidad > 0 ? (<Link to ="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)}
        </div>
    )
}

export default ItemDetail
