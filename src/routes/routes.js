const { Router } = require('express')
const { handleGetName, handleGetProducts, handleCreateProduct, handleCreateUsuario } = require('../controllers/index')


const router = Router()

router.get('/home', (req, res) => {
    res.send('Hola Intro Express js 😏')
})

router.get('/perfil', handleGetName)

router.get("/productos", handleGetProducts)

router.post("/productos", handleCreateProduct)
router.post("/usuarios", handleCreateUsuario)


module.exports = router;