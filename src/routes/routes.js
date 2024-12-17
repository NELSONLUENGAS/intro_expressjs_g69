const express = require('express')
const medicamentosRoutes = require('./medicamentos.routes')
const viajesRoutes = require('./viajes.routes')
const personalRoutes = require('./personal.routes')
const authRoutes = require('./auth.routes')
const eventosRoutes = require('./eventos.routes')

const app = express()

app.use('/medicamentos', medicamentosRoutes)
app.use('/viajes', viajesRoutes)
app.use('/personal', personalRoutes)
app.use('/auth', authRoutes)
app.use('/eventos', eventosRoutes)

module.exports = app;