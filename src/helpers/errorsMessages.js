module.exports = {
    TRIP_NOT_FOUND: {
        id: 'viajeNoEncontrado',
        statusCode: 404,
        message: 'Viaje no encontrado',
        description: 'El viaje con el ID asignado no existe en la base de datos',
    },
    SERVER_ERROR: {
        id: 'serverError',
        statusCode: 500,
        message: 'Error interno en el servidor. Pruba más tarde',
        description: 'Error inesperado en el servidor',
    }
}