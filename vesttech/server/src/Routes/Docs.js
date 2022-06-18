const express = require('express')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

const Router = express.Router()

Router.use('/docs', swaggerUi.serve)
Router.get('/docs', swaggerUi.setup(swaggerDocument))

module.exports = Router
