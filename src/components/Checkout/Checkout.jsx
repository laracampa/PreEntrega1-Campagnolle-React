import { useState, useEffect, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css'

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState ("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState ("");
    const [ordenId, setOrdenId] = useState ("");

    const manejadorSubmit = (event) =>{
        event.preventDefault();
        if(!nombre || !apellido || !celular || !email || !emailConfirmacion){
            setError("Por favor complete todos la información.");
            return;
        }
        if(email !== emailConfirmacion){
            setError("Por favor escriba direcciones de email que coincidan.");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                titulo: producto.item.titulo,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce ((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            celular,
            email
        };

        addDoc (collection (db, "ordenes"), orden)
        .then ((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
        })
        .catch((error)=>{
            console.log("Error al crear la orden.", error);
            setError("Se produjo un error al crear la orden. Intente nuevamente.");
        })
    }

    return (
        <section className="orden">
            <section className="pedido">
                <h1>Pedido:</h1>
                {carrito.map(producto=> (
                        <div key={producto.item.id} className="checkout">
                            <span>
                            <p className="checkoutNombre">{producto.item.titulo} x {producto.cantidad}</p>
                            <p className="checkoutPrecio">Precio: $ {producto.item.precio}</p></span>
                        </div>
                    ))}
            </section>
            <section className="formulario">
                <h1>Formulario de Checkout</h1>
                <form onSubmit={manejadorSubmit}>
                    <div className="form">
                        <input type="text" placeholder="Nombre:" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input type="text" placeholder="Apellido:" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        <input type="text" placeholder="Celular:" value={celular} onChange={(e) => setCelular(e.target.value)} />
                        <input type="email" placeholder="Email:" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="emailConfirmacion" placeholder="Confirmar Email:" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>

                    {
                        error && <p style={{color: "red"}}> {error} </p>
                    }

                    <button className="buttonFinalizar" type="submit"> Finalizar pedido </button>
                </form>
            </section>
                {
                    ordenId && (
                    <strong>¡Gracias por tu compra! El número del pedido es: {ordenId}</strong>
                    )
                }
        </section>
    )
}

export default Checkout
