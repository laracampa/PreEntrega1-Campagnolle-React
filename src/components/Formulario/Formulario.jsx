import React from 'react'
import {collection, addDoc} from "firebase/firestore";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState ("");

    const manejadorFormulario = () =>{
        event.preventDefault();
        addDoc (collection (db,"usuarios"), {
            nombre: nombre,
            apellido: apellido,
            celular: celular,
        })

        setNombre("");
        setApellido("");
        setCelular("");
    }

    return (
        <form onSubmit={manejadorFormulario}>
            <h2>Formulario de Contacto</h2>
            <label htmlFor="">Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <label htmlFor="">Apellido</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            <label htmlFor="">Celular</label>
            <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />
        </form>
    )
}

export default Formulario
