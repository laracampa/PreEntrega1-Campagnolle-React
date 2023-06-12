import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);
    return (    
        <div className='carrito'>
            <h1> {item.titulo} </h1>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: $ {item.precio}</p>
            <button onClick={()=> eliminarProducto(item.id)}>Eliminar producto</button>
        </div>
    )
}

export default CartItem
