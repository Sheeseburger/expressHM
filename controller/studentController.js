const article = require('./../static/mock/article.json');
const statistic = require('./../static/mock/statistic.json');

module.exports.getAll = (req, res, next) => {
	res.status(200).json(statistic);
};

module.exports.getWorstPoints = (req, res, next) => {
	// console.log(
	// 	statistic[0]['scores'].filter((s) => {
	// 		return s.type === 'homework';
	// 	})[0].score
	// );
	let lowestPerson = {
		lowestScore: statistic[0]['scores'].filter((s) => {
			return s.type === 'homework';
		})[0].score,
		name: statistic[0].name,
	};
	statistic.forEach((person) => {
		person.scores.forEach((score) => {
			// console.log(score);
			if (score.type === 'homework' && score.score < lowestPerson.lowestScore) {
				lowestPerson.lowestScore = score.score;
				lowestPerson.name = person.name;
			}
		});
	});
	res.status(200).json({ name: lowestPerson.name });
};
