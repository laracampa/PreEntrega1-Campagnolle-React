import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0){
        return (
            <div className="carritoVacio">
                <h2 className="vacioCarrito">No hay productos en el carrito.</h2>
                <Link to='/' className="button"> Seguir comprando. </Link>
            </div>
            )
        }
        return (
            <div>
                {carrito.map(producto=> <CartItem key={producto.id} {...producto}/>)}
                <div className="carritoTotal">
                    <h3>Cantidad total: {cantidadTotal}</h3>
                    <h3>Total: $ {total}</h3>
                </div>
                <div className="carritoBotones">
                <button onClick={()=> vaciarCarrito()} className="button">Vaciar Carrito</button>
                <Link to='/checkout' className="button">Finalizar Compra</Link>
                </div>
            </div>
        )
}

export default Cart
