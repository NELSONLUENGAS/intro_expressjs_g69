const express = require('express')
const morgan = require('morgan')
const APIRoutes = require('./routes/routes')

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())


app.use('/api', APIRoutes)


module.exports = app