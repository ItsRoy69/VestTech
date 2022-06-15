const jwt = require('jsonwebtoken')

const VerifyJWT = (req, res, next) => {
	const token = req.headers['x-access-token']?.split(' ')[1]

	if (!token)
		return res.status(400).json({
			success: false,
			isLoggedIn: false,
			error: 'Incorect token given',
		})

	jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
		if (error)
			return res.status(400).json({
				success: false,
				isLoggedIn: false,
				error: 'Failed to authenticate',
			})

		const user = {
			id: decoded.id,
			username: decoded.username,
		}

		req.user = user

		next()
	})
}

module.exports = VerifyJWT
