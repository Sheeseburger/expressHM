const express = require('express');
const articleController = require('./../controller/articleController');
const bodyValidator = require('./../middleware/bodyValidator.middlware');
const router = express.Router();

router
	.route('/')
	.get(articleController.getAll)
	.post(bodyValidator('name', 'description', 'type', 'tags'), articleController.addArticle)
	.patch(bodyValidator('tags'), articleController.updateTags);
module.exports = router;
