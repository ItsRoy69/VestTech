const express = require('express')

// Controllers
const { SignUp, SignIn, GetUserData } = require('../Controllers/Auth')

// Middleware
const VerifyJWT = require('../Middlewares/VerifyJWT')

// Validation
const SignUpValidation = require('../Validation/Auth/SignUp')
const SignInValidation = require('../Validation/Auth/SignIn')

const Router = express.Router()

Router.post('/signup', SignUpValidation(), SignUp)
Router.post('/signin', SignInValidation(), SignIn)
Router.get('/user', VerifyJWT, GetUserData)

module.exports = Router
