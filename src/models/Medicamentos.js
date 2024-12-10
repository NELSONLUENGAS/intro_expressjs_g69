const { DB } = require("../config/db")
const format = require('pg-format')

const obtenerMedicamentos = async (limit = 10, order_by = 'id_ASC', page = 1) => {
    try {
        const [campo, direccion] = order_by.split("_") //id_ASC  =>  ['id', 'ASC']
        const offset = Math.abs((page - 1) * limit)

        console.log(offset)
        const SQLQUERY = format(`
            SELECT * FROM medicamentos
            ORDER BY %s %s
            LIMIT %s
            OFFSET %s`,
            campo,
            direccion,
            limit,
            offset
        );

        const { rows, rowCount } = await DB.query(SQLQUERY)
        const { rowCount: count } = await DB.query('SELECT * FROM medicamentos')

        return {
            rows,
            rowCount,
            pages: Math.ceil(count / limit)
        }

    } catch (error) {
        throw error
    }
}

const obtenerMedicamentosFiltrados = async (stock_min, precio_max) => {
    try {
        const SQLQUERY = handleGetFilters(stock_min, precio_max)
        const { rows, rowCount } = await DB.query(SQLQUERY)

        return {
            rows,
            rowCount,
        }

    } catch (error) {
        throw error
    }
}

const handleGetFilters = (stock_min = '', precio_max = '') => {
    let filtros = []

    if (precio_max) filtros.push(`precio <= ${precio_max}`)
    if (stock_min) filtros.push(`stock >= ${stock_min}`)

    let consulta = "SELECT * FROM medicamentos"

    if (filtros.length) {
        filtros = filtros.join(" AND ") //['precio <= 4000', 'stock >= 4000'] => "precio <= 400"
        consulta += ` WHERE ${filtros}`
    }

    return consulta
}

module.exports = {
    obtenerMedicamentos,
    obtenerMedicamentosFiltrados
}