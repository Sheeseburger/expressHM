const articles = require('./../static/mock/article.json');

module.exports.getAll = (req, res, next) => {
	res.status(200).json(articles);
};
module.exports.addArticle = (req, res, next) => {
	let createdAt = new Date().toISOString();
	let article = { ...req.body, createdAt };
	articles.push(article);

	res.status(200).json({ message: 'Added to local mock up', article });
};
module.exports.updateTags = (req, res, next) => {
	if (typeof req.body.tags != typeof []) {
		return res.status(400).json({ message: 'Can update only tags' });
	}
	if (!req.body.name) {
		return res.status(400).json({ message: 'Cant find needed arcticle without name' });
	}
	const arcticleIndex = articles.findIndex((ar) => {
		return ar.name === req.body.name;
	});

	if (arcticleIndex === -1) return res.status(400).json({ message: 'Cant find needed arcticle ' });
	if (req.body.tags.length === 0) articles[arcticleIndex].tags = [];
	else
		req.body.tags.forEach((tag) => {
			articles[arcticleIndex].tags.push(tag);
		});
	res.status(200).json({ message: 'Added to local mock up', article: articles[arcticleIndex] });
};
