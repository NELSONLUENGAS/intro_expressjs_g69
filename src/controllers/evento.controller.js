const { getHeadersToken, decodeToken, verifyToken } = require('../helpers/jwt')
const Evento = require('../models/Evento')

const handleDelete = async (req, res, next) => {

    try {
        const { id } = req.params
        const token = getHeadersToken(req)

        verifyToken(token)
        const { email } = decodeToken(token)

        const evento = await Evento.eliminarEvento(id)
        res.json({ msg: `El usuario ${email} ha eliminado el evento de id ${id}`, data: evento })
    } catch (error) {
        next(error)
    }
}

const handleUpdate = async (req, res, next) => {

    try {
        const { id } = req.params
        const evento = req.body

        const token = getHeadersToken(req)
        verifyToken(token)
        const { email } = decodeToken(token)

        const eventoActualizado = await Evento.actualizarEvento(id, evento)
        res.json({ msg: `El usuario ${email} ha actualizado el evento de id ${id}`, data: eventoActualizado })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    handleDelete,
    handleUpdate
}