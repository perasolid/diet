const Dri = mongoose.model('Dri');
const isValidObjectId = require('../config/is-object-id');

module.exports.getAll = (req, res) => {
	Dri.find({})
		.sort({ _id: -1 })
		.exec((err, doc) => {
			if (err)
				return res.status(500).json(err);
			res.status(200).json(doc);
		});
};

module.exports.getUserDris = (req, res) => {
	const id = mongoose.Types.ObjectId(req.params.id);
	Dri.aggregate([
		{
			$match: {
				user_id: id
			}
		}
	]).exec((err, list) => {
		if (err) throw err;
		res.status(200).json(list);
	});
};

module.exports.getUserActiveDri = (req, res) => {
	const id = mongoose.Types.ObjectId(req.params.id);
	Dri.aggregate([
		{
			$match: {
				user_id: id,
				active: true
			}
		}
	]).exec((err, list) => {
		if (err) throw err;
		res.status(200).json(list);
	});
};

module.exports.setStatusToActive = (req, res) => {
	const user_id = mongoose.Types.ObjectId(req.body.user_id);
	const id = mongoose.Types.ObjectId(req.body._id);
	Dri.updateMany({ user_id: user_id }, { active: false })
		.then(() => {
			Dri.updateOne({ _id: id }, { active: true })
				.then(() => {
					res.status(200).json({ message: 'Successfully set active status for DRI!' });
				})
		})
		.catch((err) => {
			res.status(400).json(err);
		})
};

module.exports.addDri = (req, res) => {
	if (!isValidObjectId(req.body.user_id))
		return res.status(400).json({ message: "Invalid user_id format for Dri creation" })
	const dri = new Dri(req.body);
	const id = mongoose.Types.ObjectId(req.body.user_id);

	dri.validate()
		.then(() => {
			Dri.updateMany({ user_id: id }, { active: false })
				.then(() => {
					dri.save()
						.then(() => {
							res.status(200).json({ message: 'Successfully created DRI!' });
						})
				})
		})
		.catch((err) => {
			res.status(400).json(err);
		})
};

module.exports.updateDri = (req, res) => {
	if (!isValidObjectId(req.params.id))
		return res.status(400).json({ message: "Invalid dri id format" });
	const dri = new Dri(req.body);
	dri.validate((err) => {
		if (err)
			res.status(400).json(err);
		else {
			Dri.update({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
				.then(() => {
					res.status(200).json({ message: 'Successfully updated DRI!' });
				})
				.catch((err) => {
					res.status(404).send(err);
				});
		}
	});
};

module.exports.deleteDri = (req, res) => {
	if (!isValidObjectId(req.params.id))
		return res.status(400).json({ message: "Invalid dri id format" })
	Dri.remove({ _id: req.params.id }, (err, result) => {
		if (err)
			res.json(err);
		else
			res.json(result);
	});
};