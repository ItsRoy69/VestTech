const { body } = require('express-validator')

// Middleware
const CheckValidationError = require('../../Middlewares/CheckValidationError')

const SignUp = () => {
	const validator = [
		body('username')
			.trim()
			.not()
			.isEmpty()
			.withMessage('Username is required')
			.bail()
			.escape()
			.isLength({ max: 32 })
			.withMessage('Username must be less than 32 characters'),
		body('name')
			.trim()
			.not()
			.isEmpty()
			.withMessage('Name is required')
			.bail()
			.escape()
			.isLength({ max: 64 })
			.withMessage('Name must be less than 64 characters'),
		body('email')
			.trim()
			.not()
			.isEmpty()
			.withMessage('Email is required')
			.bail()
			.escape()
			.isEmail()
			.withMessage('Email is not valid')
			.bail()
			.normalizeEmail({ all_lowercase: true }),
		body('password')
			.trim()
			.not()
			.isEmpty()
			.withMessage('Password is required')
			.bail()
			.isString()
			.withMessage('Password must be a string')
			.custom(value => {
				if (/\s/g.test(value)) {
					throw new Error('Password cannot have whitespace')
				} else {
					return true
				}
			})
			.withMessage('Password cannot have whitespace')
			.bail()
			.isLength({ min: 8, max: 32 })
			.withMessage('Password must be between 8 and 32 characters'),
		CheckValidationError(),
	]

	return validator
}

module.exports = SignUp
