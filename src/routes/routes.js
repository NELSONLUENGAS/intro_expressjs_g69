const express = require('express')
const medicamentosRoutes = require('./medicamentos.routes')
const viajesRoutes = require('./viajes.routes')
const personalRoutes = require('./personal.routes')

const app = express()

app.use('/medicamentos', medicamentosRoutes)
app.use('/viajes', viajesRoutes)
app.use('/personal', personalRoutes)

module.exports = app;