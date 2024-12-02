const { DB } = require('../config/db')

const crear = async (destino, presupuesto) => {
    try {
        const SQLQuery = "INSERT INTO viajes values (DEFAULT, $1, $2) RETURNING *"
        const SQLValues = [destino, presupuesto]

        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues)

        return {
            rowCount,
            rows
        }
    } catch (error) {
        throw error
    }

}

const ver = async () => {

    try {

        const SQLQuery = "SELECT * FROM viajes"
        const { rowCount, rows } = await DB.query(SQLQuery)

        return {
            rowCount,
            rows
        }
    } catch (error) {
        throw error
    }
}

const actualizar = async (presupuesto, id) => {
    try {
        const SQLQuery = "UPDATE viajes SET presupuesto = $1 WHERE id = $2 RETURNING *"
        const SQLValues = [presupuesto, id]

        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues)

        return {
            rowCount,
            rows
        }
    } catch (error) {
        throw error
    }
}

const eliminar = async (id) => {
    try {
        const SQLQuery = "DELETE FROM viajes WHERE id = $1 RETURNING *"
        const SQLValues = [id]

        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues)

        return {
            rowCount,
            rows
        }
    } catch (error) {
        throw error
    }
}

const exists = async (id) => {
    try {
        const SQLQuery = "SELECT * FROM viajes WHERE id = $1"
        const SQLValues = [id]

        const { rowCount } = await DB.query(SQLQuery, SQLValues)

        return rowCount ? true : false

    } catch (error) {
        throw error
    }
}

module.exports = {
    crear,
    ver,
    actualizar,
    eliminar,
    exists
}