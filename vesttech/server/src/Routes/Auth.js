const express = require('express')

// Controllers
const { SignUp } = require('../Controllers/Auth')

// Middleware
const Router = express.Router()

Router.post('/signup', SignUp)

module.exports = Router
