const Medicamentos = require('../models/Medicamentos')

const getAll = async (req, res, next) => {

    try {
        const { limit, order_by, page } = req.query
        const response = await Medicamentos.obtenerMedicamentos(limit, order_by, page)

        res.json({
            msg: "Lista de Medicamentos",
            data: response
        })
    } catch (error) {
        next(error)
    }
}

const getFiltered = async (req, res, next) => {

    try {
        const { stock_min, precio_max } = req.query
        const response = await Medicamentos.obtenerMedicamentosFiltrados(stock_min, precio_max)

        res.json({
            msg: "Lista de Medicamentos filtrada",
            data: response
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll,
    getFiltered
}