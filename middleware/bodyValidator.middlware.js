const createError = require('http-errors');

const bodyValidator = (...keyParams) => {
	return (req, res, next) => {
		const keys = Object.keys(req.body);
		keyParams.forEach((param) => {
			if (!keys.includes(param) || !req.body.param) {
				console.log('Bad request: need: ' + param);
				next(createError(400, 'Bad request: need: ' + param));
			}
			return;
		});
		next();
	};
};

module.exports = bodyValidator;
