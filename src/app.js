const express = require('express')
const morgan = require('morgan')
const APIRoutes = require('./routes/routes')
const cors = require('cors')
const errorMiddleware = require('./middlewares/errorMiddleware')


const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


// Routes
app.use('/api', APIRoutes)

app.use(errorMiddleware)

module.exports = app