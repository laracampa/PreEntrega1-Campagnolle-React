import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <h1 className='titulo'>¡Bienvenido/a! <br />
        {props.greeting} </h1>
    )
}

export default ItemListContainer