const Personal = require('../models/Personal')

const getAll = async (req, res, next) => {

    try {
        const { limit, order_by, page } = req.query
        const response = await Personal.obtenerPersonal(limit, order_by, page)

        res.json({
            msg: "Lista de Personal",
            data: response
        })
    } catch (error) {
        next(error)
    }
}

const getFiltered = async (req, res, next) => {

    try {
        const { salario_min, salario_max, role } = req.query

        const response = await Personal.obtenerPersonalFiltrados(salario_min, salario_max, role)

        res.json({
            msg: "Lista de personal filtrada",
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