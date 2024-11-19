const { readFileSync, writeFileSync } = require('fs')

const handleGetName = (req, res) => {
    res.send('Nelson Luengas')
}


const handleGetProducts = (req, res) => {

    const productos = JSON.parse(readFileSync("productos.json"))
    res.json(productos)
}

const handleCreateProduct = (req, res) => {

    const producto = req.body

    const productos = JSON.parse(readFileSync("productos.json"))

    productos.push(producto)
    writeFileSync("productos.json", JSON.stringify(productos, null, 3))

    res.send("Producto agregado con éxito!")
}

const handleCreateUsuario = (req, res) => {

    const usuario = req.body
    const usuarios = JSON.parse(readFileSync("usuarios.json"))

    usuarios.push(usuario)
    writeFileSync("usuarios.json", JSON.stringify(usuarios, null, 3))

    res.send("Usuario agregado con éxito!")
}

module.exports = {
    handleGetName,
    handleGetProducts,
    handleCreateProduct,
    handleCreateUsuario
}