const { DB } = require("../config/db")
const format = require('pg-format')

const obtenerPersonal = async (limit = 9, order_by = 'id_ASC', page = 1) => {
    try {
        const [campo, direccion] = order_by.split("_") //id_ASC  =>  ['id', 'ASC']
        const offset = Math.abs((page - 1) * limit)

        console.log(offset)
        const SQLQUERY = format(`
            SELECT * FROM personal
            ORDER BY %s %s
            LIMIT %s
            OFFSET %s`,
            campo,
            direccion,
            limit,
            offset
        );

        const { rows, rowCount } = await DB.query(SQLQUERY)
        const { rowCount: count } = await DB.query('SELECT * FROM personal')

        return {
            rows,
            rowCount,
            pages: Math.ceil(count / limit)
        }
    } catch (error) {
        throw error
    }
}


const obtenerPersonalFiltrados = async (salario_min, salario_max, role) => {
    try {
        console.log(salario_min, salario_max, role)
        const SQLQUERY = handleGetFilters(salario_min, salario_max, role)
        const { rows, rowCount } = await DB.query(SQLQUERY)

        return {
            rows,
            rowCount,
        }

    } catch (error) {
        throw error
    }
}

const handleGetFilters = (salario_min = '', salario_max = '', role = '') => {
    let filtros = []

    if (salario_min) filtros.push(`salario <= ${salario_max}`)
    if (salario_max) filtros.push(`salario >= ${salario_min}`)
    if (role) filtros.push(`role ilike ${role}`)


    let consulta = "SELECT * FROM personal"

    if (filtros.length) {
        filtros = filtros.join(" AND ")
        consulta += ` WHERE ${filtros}`
    }
    console.log(consulta)
    return consulta
}

module.exports = {
    obtenerPersonal,
    obtenerPersonalFiltrados
}