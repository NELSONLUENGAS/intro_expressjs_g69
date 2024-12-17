const { DB } = require("../config/db")
const format = require('pg-format')

const verificarCredenciales = async (email, password) => {
    try {

        const SQLQuery = format(`
            SELECT * FROM usuarios
            WHERE email = %L AND password = %L`,
            email,
            password
        );

        const { rowCount } = await DB.query(SQLQuery)

        if (!rowCount) throw new Error('USER_NOT_FOUND')

        return Boolean(rowCount)
    } catch (error) {
        throw error
    }
}

const exists = async (email) => {
    try {

        const SQLQuery = format(`
            SELECT * FROM usuarios
            WHERE email = %L`,
            email
        );

        const { rows: [user], rowCount } = await DB.query(SQLQuery)

        if (!rowCount) throw new Error('USER_NOT_FOUND')

        return user
    } catch (error) {
        throw error
    }
}

const register = async (email, passwordHashed) => {
    try {

        const SQLQuery = format(`
            INSERT INTO usuarios
            VALUES (DEFAULT, %L, %L) RETURNING *`,
            email,
            passwordHashed
        );

        const { rows: [user] } = await DB.query(SQLQuery)

        // if (!rowCount) throw new Error('USER_NOT_FOUND')

        return user
    } catch (error) {
        throw error
    }
}


module.exports = {
    verificarCredenciales,
    register,
    exists
}