const bcrypt = require('bcrypt')

// Models
const User = require('../Models/User')

const SignUp = async (req, res) => {
	const { body } = req

	const user = new User({
		username: body.username.toLowerCase(),
		name: body.name,
		email: body.email.toLowerCase(),
		password: await bcrypt.hash(body.password, 10),
	})

	user.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: user._id,
				message: 'User created',
			})
		})
		.catch(() => {
			return res.status(500).json({
				success: false,
				error: 'User not created',
			})
		})
}

module.exports = { SignUp }
