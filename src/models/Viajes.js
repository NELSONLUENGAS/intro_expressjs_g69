const { DB } = require('../config/db')

const crear = async (destino, presupuesto) => {

    const SQLQuery = "INSERT INTO viajes values (DEFAULT, $1, $2) RETURNING *"
    const SQLValues = [destino, presupuesto]

    const { rowCount, rows } = await DB.query(SQLQuery, SQLValues)

    return {
        rowCount,
        rows
    }
}

const ver = async () => {

    const SQLQuery = "SELECT * FROM viajes"
    const { rowCount, rows } = await DB.query(SQLQuery)

    return {
        rowCount,
        rows
    }
}

module.exports = {
    crear,
    ver
}