const Viajes = require('../models/Viajes')

const handleCreateTrip = async (req, res) => {

    const { destino, presupuesto } = req.body

    const response = await Viajes.crear(destino, presupuesto)

    res.json({
        msg: "Viaje creado con éxito!",
        data: response
    })
}

const handleGetTrips = async (req, res) => {

    const response = await Viajes.ver()

    res.json({
        msg: "Lista de viajes",
        data: response
    })
}

module.exports = {
    handleCreateTrip,
    handleGetTrips
}