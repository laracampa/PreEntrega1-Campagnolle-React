import React from 'react'

const ItemDetail = ({id, titulo, precio, img}) => {
    return (
        <div>
            <h3>{titulo}</h3>
            <img src={img} alt= {titulo} />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum fuga vel deserunt iure at. Iure, officiis. Minus culpa, vero architecto maxime saepe quidem, voluptatum rem tempora at non incidunt ipsum?</p>
            <p>Precio: $ {precio}</p>
            <p>ID: {id}</p>
        </div>
    )
}

export default ItemDetail
