const { validationResult } = require('express-validator');
const students = require('./../static/mock/students.json');

module.exports.getAll = (req, res, next) => {
	res.status(200).json(students);
};
module.exports.addUser = (req, res, next) => {
	let createdAt = new Date().toISOString();
	let user = { ...req.body, createdAt };
	console.log(user);
	students.push(user);

	res.status(200).json({ message: 'Added to local mock up', user });
};
module.exports.getUserByEmail = (req, res, next) => {
	if (req.params.email.indexOf('@') === -1) {
		return res.status(400).json({ message: 'Cant find email :(' });
	}
	const user = students.filter((student) => {
		return student.email === req.params.email;
	});
	if (user && user.length != 0) return res.status(200).json(user);
	else res.status(400).json({ message: 'Cant find user with this email :(' });
};
module.exports.updateUser = (req, res, next) => {
	if (req.params.email.indexOf('@') === -1) {
		return res.status(400).json({ message: 'Cant find email :(' });
	}

	const userIndex = students.findIndex((student) => {
		return student.email === req.params.email;
	});

	if (userIndex !== -1) {
		let user = students[userIndex];
		let amount = 0;

		Object.keys(req.body).forEach((key) => {
			if (user.hasOwnProperty(key)) {
				user[key] = req.body[key];
				amount++;
			}
		});

		return res.status(200).json({ message: `Updated ${amount} fields`, user });
	} else res.status(400).json({ message: 'Cant find user with this email :(' });
};
module.exports.deleteUser = (req, res, next) => {
	if (req.params.email.indexOf('@') === -1) {
		return res.status(400).json({ message: 'Cant find email :(' });
	}

	const userIndex = students.findIndex((student) => {
		return student.email === req.params.email;
	});

	if (userIndex !== -1) {
		students[userIndex] = {};

		return res.status(204).json({ message: `Deleted user` });
	} else res.status(400).json({ message: 'Cant find user with this email :(' });
};
