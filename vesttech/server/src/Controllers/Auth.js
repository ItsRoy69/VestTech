const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Models
const User = require('../Models/User')

const SignUp = async (req, res) => {
	const { body } = req

	const newUser = new User({
		username: body.username.toLowerCase(),
		name: body.name,
		email: body.email.toLowerCase(),
		password: await bcrypt.hash(body.password, 10),
	})

	User.findOne({
		$or: [
			{ email: body.email.toLowerCase() },
			{ username: body.username.toLowerCase() },
		],
	})
		.exec()
		.then(user => {
			if (user) {
				return res.status(400).json({
					success: false,
					error: 'Username or email has already taken',
				})
			}

			newUser.save()
				.then(() => {
					return res.status(201).json({
						success: true,
						id: newUser._id,
						message: 'User created',
					})
				})
				.catch(() => {
					return res.status(500).json({
						success: false,
						error: 'User not created',
					})
				})
		})
		.catch(() => {
			return res.status(400).json({
				success: false,
				error: 'Username or email has already taken',
			})
		})
}

const SignIn = (req, res) => {
	const { body } = req

	User.findOne({
		email: body.email,
	})
		.exec()
		.then(user => {
			if (!user) {
				return res.status(400).json({
					success: false,
					error: 'Invalid email or password',
				})
			}

			bcrypt
				.compare(body.password, user.password)
				.then(isPasswordCorrect => {
					if (!isPasswordCorrect) {
						return res.status(400).json({
							success: false,
							error: 'Invalid email or password',
						})
					}

					const payload = {
						id: user._id,
						username: user.username,
					}

					jwt.sign(
						payload,
						process.env.JWT_SECRET,
						{ expiresIn: 86400 },
						(error, token) => {
							if (error)
								return res.status(500).json({
									success: false,
									error: 'Login Failed',
								})

							return res.status(200).json({
								success: true,
								token: `Bearer ${token}`,
							})
						}
					)
				})
		})
}

const GetUserData = (req, res) => {
	User.findById(req.user.id)
		.exec()
		.then(user => {
			return res.status(200).json({
				success: true,
				data: {
					id: user.id,
					username: user.username,
					name: user.name,
					email: user.email,
				},
			})
		})
		.catch(() => {
			return res.status(500).json({
				success: false,
				error: 'Internal server error',
			})
		})
}

module.exports = { SignUp, SignIn, GetUserData }
