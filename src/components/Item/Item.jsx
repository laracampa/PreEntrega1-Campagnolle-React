import React from 'react'

const Item = ({id, titulo, precio,img}) => {
    return (
        <div className='cardProducto'>
            <img src={img} alt= {titulo} />
            <h3>{titulo}</h3>
            <p>Precio: $ {precio}</p>
            <p>ID: {id}</p>
            <button className='masInfo'>Más información</button>
        </div>
    )
}

export default Item
