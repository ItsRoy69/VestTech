const express = require('express')

// Controllers
const { SignUp, SignIn, GetUserData } = require('../Controllers/Auth')

// Middleware
const VerifyJWT = require('../Middlewares/VerifyJWT')

const Router = express.Router()

Router.post('/signup', SignUp)
Router.post('/signin', SignIn)
Router.get('/user', VerifyJWT, GetUserData)

module.exports = Router
