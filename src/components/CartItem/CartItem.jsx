import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);
    return (    
        <div>
            <h4> {item.titulo} </h4>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: $ {item.precio}</p>
            <button onClick={()=> eliminarProducto(item.id)}>Eliminar producto</button>
        </div>
    )
}

export default CartItem
