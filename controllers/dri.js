var Dri = mongoose.model('Dri');
const isValidObjectId = require('../config/is_object_id');

module.exports.getAll = function(req, res) {
	Dri.find({})
	.sort({ _id: -1 })
	.exec(function (err, doc) {
        if(err)
			return res.status(500).json(err);
        res.status(200).json(doc);
    });
};

module.exports.getUserDris = function(req, res) {
	var id = mongoose.Types.ObjectId(req.params.id);
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

module.exports.getUserActiveDri = function(req, res) {
	var id = mongoose.Types.ObjectId(req.params.id);
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

module.exports.setStatusToActive = function(req, res) {
	var user_id = mongoose.Types.ObjectId(req.body.user_id);
	var id = mongoose.Types.ObjectId(req.body._id);
	Dri.updateMany({user_id: user_id}, {active: false})
		.then(() => {
			Dri.updateOne({_id: id}, {"active": true})
			.then(() => {
				res.status(200).json({message:'Successfully set active status for DRI!'});
			})
		})
		.catch((err) => {
			res.status(400).json(err);
		})
};

module.exports.addDri = function(req, res) {
	if(!isValidObjectId(req.body.user_id))
		return res.status(400).json({message: "Invalid user_id format for Dri creation"})
	var dri = new Dri(req.body);
	var id = mongoose.Types.ObjectId(req.body.user_id);
	
	dri.validate()
	.then(() => {
		Dri.updateMany({user_id: id}, {active: false})
		.then(() => {
			dri.save()
			.then(() => {
				res.status(200).json({message:'Successfully created DRI!'});
			})
		})
	})
	.catch((err) => {
		res.status(400).json(err);
	})
};

module.exports.updateDri = function(req, res) {
	if(!isValidObjectId(req.params.id))
		return res.status(400).json({message: "Invalid dri id format"})
	var dri = new Dri(req.body);
	dri.validate(function(err) {
		if (err)
			res.status(400).json(err);
		else {
			Dri.update({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
				.then(function (success) {
				  res.json();
				})
				.catch(function (err) {
					res.status(404).send(err);
				});
		}
	});
};

module.exports.deleteDri = function(req, res) {
	if(!isValidObjectId(req.params.id))
		return res.status(400).json({message: "Invalid dri id format"})
  	Dri.remove({_id: req.params.id},function(err, result){
        if(err)
        	res.json(err);
        else
            res.json(result);
    });
};