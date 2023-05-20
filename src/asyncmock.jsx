const productos = [
    {titulo: "Sacher", precio: 1000, id: "1", img:"./img/torta-chocolate.png", idCat: "Tortas"},
    {titulo: "Lemonpie", precio: 2000, id: "2", img:"./img/lemonpie.png", idCat: "Tortas"},
    {titulo: "Brownie", precio: 3000, id: "3", img:"./img/brownie.png", idCat: "Tortas"},
    {titulo: "Chocotorta", precio: 4000, id: "4", img:"./img/chocotorta.png", idCat: "Tortas"}
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

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 1000)
    })
}