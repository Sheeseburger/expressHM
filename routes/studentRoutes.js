const express = require('express');
const studentController = require('./../controller/studentController');

const router = express.Router();

router.route('/').get(studentController.getAll);
router.route('/lowestHomework').get(studentController.getWorstPoints);

module.exports = router;
