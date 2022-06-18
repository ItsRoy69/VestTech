const express = require('express')

const Router = express.Router()

Router.all('*', (req, res) => {
	return res.status(404).json({ success: false, error: 'Not found' })
})

module.exports = Router
