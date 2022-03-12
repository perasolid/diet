var Dri = mongoose.model('Dri');

module.exports.getAll = function(req, res) {
	Dri.find({})
	.sort({ _id: -1 })
	.exec(function (err, doc) {
		console.log(doc);
        if(err) { res.status(500).json(err); return; };
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
	]).exec( (err, list) => {
        if (err) throw err;
		res.status(200);
		res.json(list);
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
	]).exec( (err, list) => {
        if (err) throw err;
		res.status(200);
		res.json(list);
    }); 
};

module.exports.setStatusToActive = function(req, res) {
	var user_id = mongoose.Types.ObjectId(req.body.user_id);
	var id = mongoose.Types.ObjectId(req.body._id);
	Dri.update({"user_id": user_id}, {"$set": {"active": false}}, {"multi": true}, 
		(err, writeResult) => {
			Dri.update({"_id": id}, {"$set": {"active": true}}, {"multi": true}, 
				(err, writeResult) => {
					if(err) {
					console.log(err);
					res.status(400);
					res.send(err);
				}
				else {
					res.status(200);
					res.json({
						message:'Successfully set active status for DRI!'
					});
				}
				}
			);
		}
	);
};

module.exports.addDri = function(req, res) {
	var dri = new Dri(req.body);
	var id = mongoose.Types.ObjectId(req.body.user_id);
	
	dri.validate(function(err) {
		if (err) {
			console.log(err);
			res.status(400);
			res.send(err);
		} else {
			Dri.update({"user_id": id}, {"$set": {"active": false}}, {"multi": true}, 
				(err, writeResult) => {
					dri.save(function(err) {
						if(err) {
							console.log(err);
							res.status(400);
							res.send(err);
						}
						else {
							res.status(200);
							res.json({
								message:'Successfully created DRI!'
							});
						}
					});
				}
			);
		}
	});
};

module.exports.updateDri = function(req, res) {
	var dri = new Dri(req.body);
	dri.validate(function(err) {
		if (err) {
			console.log(err);
			res.status(400);
			res.send(err);
		} else {
			Dri.update({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
				.then(function (success) {
				  res.json();
				})
				.catch(function (error) {
					res.status(404).send(err);
				});
		}
	});
};

module.exports.deleteDri = function(req, res) {
  Dri.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};