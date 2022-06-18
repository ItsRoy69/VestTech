const { validationResult } = require('express-validator')

const CheckValidationErrorFactory = callback => {
	const CheckValidationError = (req, res, next) => {
		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			if (callback) callback(req)

			return res
				.status(400)
				.json({ success: false, errors: errors.array() })
		}

		next()
	}

	return CheckValidationError
}

module.exports = CheckValidationErrorFactory
