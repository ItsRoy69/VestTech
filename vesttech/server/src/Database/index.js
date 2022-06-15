const mongoose = require('mongoose')

mongoose
	.connect(process.env.DB_HOST, { useNewUrlParser: true })
	.catch(error => {
		console.error('Connection error', error.message)
	})

const db = mongoose.connection

module.exports = db
