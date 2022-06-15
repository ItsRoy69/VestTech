require('dotenv').config()

const express = require('express')

// Middleware
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')

// Database
const db = require('./Database')

// Router
const NoMatchRouter = require('./Routes/NoMatch')

const app = express()
const PORT = process.env.PORT || 8080

// Middleware
app.use(compression())
app.use(helmet())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

// Database
db.on('error', error => {
	console.log(`MongoDB connection error: ${error}`)
})

app.use('*', NoMatchRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
