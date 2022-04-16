var User = mongoose.model('User');
var crypto = require('crypto');
const email_config = require('../config/email');
const html_templates = require('../defaults/html_templates'); 

module.exports.getAll = function(req, res) {
  const regex = new RegExp(req.query.search, 'i')
	User.find({name: {$regex: regex}})
	.sort({ _id: -1 })
	.exec(function (err, doc) {
			if(err)
				return res.status(500).json(err);
			res.status(200).json(doc);
    });
};

module.exports.addUser = function(req, res) {
	if(!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).json({"message": "All fields required"});

  User.findOne({email: req.body.email}, function(err, user) {
    if(err)
      return console.log(err);
    if(user)
      return res.status(400).json({"message": "Email taken"});
    else {
      var user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
			user.setPassword(req.body.password);
			user.save().then(() => {
				res.status(200).json({"message" : "User created successfully"});
			});
    }
  });
};

module.exports.updateUser = function(req, res) {
	if (req.body.newPassword !== '')
		req.body.hash = crypto.pbkdf2Sync(req.body.newPassword, req.body.salt, 1000, 64, 'sha512').toString('hex')
	User.findOneAndUpdate({_id: req.params.id},{
		$set: req.body
	},
	function(err, result){
		if(err)
			res.json(err);
		else
			res.json(result);
	});
};

module.exports.updateUserByAdmin = function(req, res) {
	User.findOneAndUpdate({_id: req.params.id},{
		$set:{
		  name:req.body.name,
		  email:req.body.email,
		  role:req.body.role
		}
	},
	function(err, result){
		if(err)
			res.json(err);
		else
			res.json(result);
	});
};

module.exports.getHash = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ hash: crypto.pbkdf2Sync(req.body.currentPassword, req.body.salt, 1000, 64, 'sha512').toString('hex')  }));
};

module.exports.deleteUser = function(req, res) {
  User.remove({_id: req.params.id}, function(err, result) {
        if(err)
          res.json(err);
        else
          res.json(result);
  });
};

function makeid(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ )
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	return result;
}

module.exports.resetPassword = function(req, res) {
	var password = makeid(10);
	User.findOneAndUpdate({_id: req.body._id},{
			$set:{
			  hash: crypto.pbkdf2Sync(password, req.body.salt, 1000, 64, 'sha512').toString('hex')
			}
	})
	.then(() => {
		var mailOptions = {
			from: process.env.EMAIL,
			to: req.body.email,
			subject: 'Reset password',
			html: html_templates.reset_password.replace(/####/g, password)
		};
		email_config.transport.sendMail(mailOptions, function(err, info) {
			if (err)
				res.status(503).json({"message" : err.message});
			else
				res.status(200).json({"message" : "Password reset successfully!"});
		});
	})
	.catch((err) => {
		res.status(503).json({"message" : err.message});
	})
}

module.exports.getUsersByPagination = function(req, res) {
	const pageOptions = {
		page: parseInt(req.query.page, 10) || 0,
		limit: parseInt(req.query.limit, 10) || 10
	}
	User.find()
	.sort({ _id: -1 })
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, doc) {
			if(err)
				return res.status(500).json(err);
      res.status(200).json(doc);
    });
}

module.exports.numberOfUsers = function(req, res) {
	User.countDocuments()
    .exec(function (err, doc) {
			if(err)
				return res.status(500).json(err);
			res.status(200).json({"numberOfUsers":doc});
    });
}