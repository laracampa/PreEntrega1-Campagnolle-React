import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, titulo, precio,img}) => {
    return (
        <div className='cardProductos'>
            <img src={img} alt= {titulo} />
            <h3>{titulo}</h3>
            <p>Precio: $ {precio}</p>
            <p>ID: {id}</p>
            <Link to={`/item/${id}`} className='link'>Más información</Link>
        </div>
    )
}

export default Item
