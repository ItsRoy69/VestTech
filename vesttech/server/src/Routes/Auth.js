const express = require('express')

// Controllers
const { SignUp, SignIn } = require('../Controllers/Auth')

// Middleware
const Router = express.Router()

Router.post('/signup', SignUp)
Router.post('/signin', SignIn)

module.exports = Router
