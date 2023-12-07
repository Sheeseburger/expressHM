const express = require('express');
const { body, query, param } = require('express-validator');
const userController = require('./../controller/userController');
const bodyValidator = require('./../middleware/bodyValidator.middlware');
const queryValidator = require('./../middleware/queryValidator.middlware');

const router = express.Router();

router
	.route('/')
	.get(userController.getAll)
	.post(
		bodyValidator('firstName', 'lastName', 'email', 'password', 'age', 'address', 'tags'),
		body('email').isEmail(),
		userController.addUser
	);
router.use(param('email').isEmail(), queryValidator);
router
	.route('/:email')
	.get(userController.getUserByEmail)
	.patch(
		bodyValidator(['firstName', 'lastName', 'email', 'password', 'age', 'address', 'tags']),
		userController.updateUser
	)
	.delete(userController.deleteUser);

module.exports = router;
