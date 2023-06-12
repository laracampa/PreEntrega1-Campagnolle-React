import { useState, useEffect, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

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
        <div>
            <form onSubmit={manejadorSubmit}>
                <h2>Formulario de Checkout</h2>
                
                {carrito.map(producto=> (
                    <div key={producto.item.id}>
                        <p>{producto.item.titulo} x {producto.cantidad}</p>
                        <p>Precio: $ {producto.item.precio}</p>
                    </div>
                ))}
                <hr/>
                
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <div>
                </div>
                    <label htmlFor="">Celular</label>
                    <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Confirmar Email</label>
                    <input type="emailConfirmacion" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{color: "red"}}> {error} </p>
                }

                <button type="submit"> Finalizar pedido </button>

                {
                    ordenId && (
                    <strong>¡Gracias por tu compra! El número del pedido es: {ordenId}</strong>
                    )
                }

            </form>
        </div>
    )
}

export default Checkout
