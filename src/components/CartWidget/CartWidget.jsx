import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    
    return (
        <Link className='span' to='/cart'>
            <img className='imgCarrito' src={imgCarrito}  alt="Carrito" />
            { 
            cantidadTotal > 0 && <span> { cantidadTotal } </span> 
            }
        </Link>
    )
}

export default CartWidget