var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
const Dri =  require('./../models/dri');
const fs = require('fs');
const path = require('path');
var request = require('request');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {

  if(!req.body.name || !req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  User.findOne({email: req.body.email}, function(err, user) {
    if(err) {
      console.log(err);
    }
    if(user) {
      sendJSONresponse(res, 400, {
        "message": "Email taken"
      });
      return;
    } else {
		var user = new User();
		user.name = req.body.name;
		user.email = req.body.email;
		user.setPassword(req.body.password);
		user.save(function(err, insertedUser) {
			let rawdata = fs.readFileSync(path.join(__dirname, '../defaults/dri.json'));
			let dri = JSON.parse(rawdata);
			dri.user_id = insertedUser._id;
			var newDri = new Dri(dri);
			newDri.save();
			
			var token;
			token = user.generateJwt();
			res.status(200);
			res.json({
			"token" : token
			});
		});
    }
  });

};

module.exports.login = function(req, res) {

  if(!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  passport.authenticate('local', function(err, user, info){
    var token;

    //If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    //If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      //If user is not found
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports.verifyRecaptcha = function(req, res) {
	var clientServerOptions = {
		uri: 'https://www.google.com/recaptcha/api/siteverify',
		body: JSON.stringify(req.body),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	}
	request(clientServerOptions, function (error, response) {
		console.log(error,response.body);
		sendJSONresponse(response, 400, response.body);
		return;
	});
};