const User_nutrition = mongoose.model('User_nutrition');
const isValidObjectId = require('../config/is_object_id');

module.exports.getAll = (req, res) => {
	User_nutrition.find()
		.sort({ _id: -1 })
		.exec((err, doc) => {
			if (err)
				return res.status(500).json(err);
			res.status(200).json(doc);
		});
};

module.exports.getUser_nutrition = (req, res) => {
	const id = mongoose.Types.ObjectId(req.query.id);
	const startOfDay = new Date(req.query.date_of_consumption);
	let date = new Date(req.query.date_of_consumption);
	const endOfDay = new Date(date.setDate(date.getDate() + 1));
	User_nutrition.aggregate([
		{
			$match: {
				user_id: id,
				date_of_consumption: { $gte: startOfDay, $lt: endOfDay }
			}
		},
		{
			$lookup:
			{
				from: "nutritions",
				localField: "nutrition_id",
				foreignField: "_id",
				as: "nutrition"
			}
		},
		{ $unwind: "$nutrition" }
	]).exec((err, list) => {
		if (err)
			throw err;
		res.status(200).json(list);
	});
};

module.exports.addUser_nutrition = (req, res) => {
	const user_nutrition = new User_nutrition(req.body);
	user_nutrition.save((err) => {
		if (err)
			res.status(400).json(err);
		else
			res.status(200).json({ message: 'Successfully added food to diet!' });
	});
};

module.exports.updateUser_nutrition = (req, res) => {
	if (!isValidObjectId(req.params.id))
		return res.status(400).json({ message: "Invalid user-nutrition id format" })
	User_nutrition.update({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
		.then(() => {
			res.status(200).json();
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

module.exports.deleteUser_nutrition = (req, res) => {
	if (!isValidObjectId(req.params.id))
		return res.status(400).json({ message: "Invalid user-nutrition id format" })
	User_nutrition.remove({ _id: req.params.id }, (err, result) => {
		if (err)
			res.json(err);
		else
			res.json(result);
	});
};