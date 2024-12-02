const Viajes = require('../models/Viajes')

const handleCreateTrip = async (req, res, next) => {
    try {
        const { destino, presupuesto } = req.body

        const response = await Viajes.crear(destino, presupuesto)

        res.json({
            msg: "Viaje creado con éxito!",
            data: response
        })
    } catch (error) {
        next(error)
    }
}

const handleGetTrips = async (req, res, next) => {

    try {
        const response = await Viajes.ver()

        res.json({
            msg: "Lista de viajes",
            data: response
        })
    } catch (error) {
        next(error)
    }
}

const handleUpdateTrip = async (req, res, next) => {

    try {
        const { id } = req.params
        const { presupuesto } = req.body

        const response = await Viajes.actualizar(presupuesto, id)

        res.json({
            msg: "Viaje actualizado",
            data: response
        })

    } catch (error) {
        next(error)
    }
}

const handleDeleteTrip = async (req, res, next) => {

    try {
        const { id } = req.params

        const exists = await Viajes.exists(id)

        if (!exists) {
            throw new Error(
                'TRIP_NOT_FOUND',
                { cause: 'Error en la base de datos' }
            )
        }

        const response = await Viajes.eliminar(id)

        res.status(200).json({
            msg: "Viaje eliminado",
            data: response
        })
    } catch (error) {
        // res.status(error.code || 500).json({
        //     msg: "Server error",
        //     data: error.message
        // })
        next(error)
    }
}

module.exports = {
    handleCreateTrip,
    handleGetTrips,
    handleUpdateTrip,
    handleDeleteTrip
}