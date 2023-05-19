const productos = [
    {titulo: "Sacher", precio: 1000, id: "torta1", img:"./img/torta-chocolate.png"},
    {titulo: "Lemonpie", precio: 2000, id: "torta2", img:"./img/lemonpie.png"},
    {titulo: "Brownie", precio: 3000, id: "torta3", img:"./img/brownie.png"},
    {titulo: "Chocotorta", precio: 4000, id: "torta4", img:"./img/chocotorta.png"}
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}