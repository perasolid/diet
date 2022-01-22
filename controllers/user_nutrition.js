var mongoose = require('mongoose');
var User_nutrition = mongoose.model('User_nutrition');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getAll = function(req, res) {
	User_nutrition.find()
	.sort({ _id: -1 })
	.exec(function (err, doc) {
		console.log(doc);
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    });
};

module.exports.getUser_nutrition = function(req, res) {
	var id = mongoose.Types.ObjectId(req.body.id);
	var date = req.body.date_of_consumption;
	//var id = mongoose.Types.ObjectId(req.params.id);
	User_nutrition.aggregate([
		{   
			$match: {
				user_id: id,
				date_of_consumption: date
			}
		},
		{ $sort : { _id: -1 } }
	]).exec( (err, list) => {
        if (err) throw err;
		res.status(200);
		res.json(list);
    }); 
};

module.exports.addUser_nutrition = function(req, res) {
	var user_nutrition = new User_nutrition(req.body);

	user_nutrition.save(function(err) {
        if(err) {
            console.log(err);
            res.status(400);
            res.send(err);
        }
        else {
            res.status(200);
            res.json({
                message: 'Successfully added food to diet!'
            });
        }
    });
};

module.exports.updateUser_nutrition = function(req, res) {
	User_nutrition.update({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
    .then(function (success) {
      res.json();
    })
    .catch(function (error) {
        res.status(404).send(err);
    });
};

module.exports.deleteUser_nutrition = function(req, res) {
  User_nutrition.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};