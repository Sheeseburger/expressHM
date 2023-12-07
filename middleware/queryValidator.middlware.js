const { validationResult } = require('express-validator');

const validateQuerry = (req, res, next) => {
	const result = validationResult(req);
	if (!result.isEmpty()) {
		return res.status(400).json({ erors: result.array() });
	}
	next();
};

module.exports = validateQuerry;
