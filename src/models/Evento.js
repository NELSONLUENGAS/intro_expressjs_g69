const { DB } = require("../config/db")
const format = require('pg-format')

const eliminarEvento = async (id) => {
    try {

        const SQLQuery = format(`
            DELETE FROM eventos
            WHERE id = %s RETURNING *`,
            id
        );

        const { rows: [evento] } = await DB.query(SQLQuery)

        return evento;
    } catch (error) {
        throw error
    }
}

const actualizarEvento = async (id, evento) => {
    try {

        const { titulo, descripcion, fecha, lugar } = evento;
        const SQLQuery = format(`
            UPDATE eventos
            SET titulo = %L, descripcion = %L, fecha = %L, lugar = %L
            WHERE id = %s RETURNING *`,
            titulo, descripcion, fecha, lugar, id
        );

        const { rows: [eventoActualizado] } = await DB.query(SQLQuery)

        return eventoActualizado;
    } catch (error) {
        throw error
    }
}


module.exports = {
    eliminarEvento,
    actualizarEvento
}