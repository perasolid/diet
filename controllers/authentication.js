var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Verification_token = require('./../models/verification_token');
const Dri = require('./../models/dri');
const fs = require('fs');
const path = require('path');
var request = require('request');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

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

        var infoForToken = {
          "id": insertedUser._id
        }
        const token = jwt.sign(infoForToken, process.env.SECRET, { expiresIn: '1d' });
        var url = "https://mydietaryhabits.herokuapp.com/users/verifyAccount?id=" + token;        
        var verification_token = new Verification_token({ email: insertedUser.email, token: token });
        verification_token.save(function (err) {
          if(err){
            return res.status(500).send({msg:err.message});
          }

          let transport = nodemailer.createTransport({
            host: 'smtp.zoho.eu',
            port: 465,
            secure: true, //ssl
            auth: {
                user:process.env.EMAIL,
                pass:process.env.EMAIL_PASSWORD
            }
          });
          var mailOptions = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: 'Dietaty Habits - Account verification',
            html: `<!DOCTYPE html><html><head> <meta name="viewport" content="width=device-width,
            initial-scale=1"></head><body style="background-color: lightgrey; font-family: Helvetica">
            <div style="padding:0.01em 16px;padding-top:64px!important;padding-bottom:64px!important;">
            <div style="box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); width:80vw;
            background-color: white; margin:auto;"> <div style="padding:8px 16px!important;">
            <h2 style="text-align:center">Confirm your email address</h2> <p>Click the button below to
             confirm your email address. If you didn't create an account with 
             <a href="https://mydietaryhabits.herokuapp.com"> Dietary Habits</a>, you can safely 
             delete this email.</p> <div style="text-align:center;"> <a href="${url}" target="_blank"> 
             <button style="border:none;display:inline-block;padding:8px 16px;vertical-align:middle;
             overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;
             cursor:pointer;white-space:nowrap;box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
             background-color:#2196F3!important;color:white;">Verify Account</button> </a> </div> 
             <p>If that doesn't work, copy and paste the following link in your browser:</p> <p> 
             <a href="${url}" target="_blank">${url}</a> </p> <p style="margin: 0;">Cheers, <br> 
             Dietary Habits</p> <p style="margin: 0;">Dietary Habits, John Kennedy 36, New Belgrade, Serbia</p> 
             <p style="margin: 0;"> <a href="https://mydietaryhabits.herokuapp.com/">www.mydietaryhabits.com</a> 
             </p> <p style="margin: 0;">contact@dhab.com</p> </div> </div> </div></body></html>`
          };
        
          transport.sendMail(mailOptions, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
              res.status(200);
              res.json({
                "message" : "A verification email has been sent to " + user.email + ". It will expire after one day. If you did not get a verification email, click on resend verification email."
              });
            }
          });
        });
      });
    }
  });

};

module.exports.verifyAccount = function(req, res) {
  token = req.query.id;
  if (token) {
    try {
        jwt.verify(token, process.env.SECRET, (e, decoded) => {
          if (e) {
              console.log(e)
              return res.sendStatus(403)
          } else {
              var id = mongoose.Types.ObjectId(decoded.id);
              User.update({"_id": id}, {"$set": {"isVerified": true}}, {"multi": true}, 
                (err, writeResult) => {
                  if(err) {
                  console.log(err);
                  res.status(400);
                  res.send(err);
                  }
                  else {
                    res.status(200);
                    res.sendFile(path.join(__dirname, '../defaults/verifiedAccount.html'));;
                  }
                }
              );
          }
        });
      } catch (err) {

          console.log(err)
          return res.sendStatus(403)
      }
  } else {
      return res.sendStatus(403)

  }
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
      if(user.isVerified) {
        token = user.generateJwt();
        res.status(200);
        res.json({
          "token" : token
        });
      } else {
        return res.status(401).json({msg:'Your Email has not been verified. Please click on resend'});
      }
    } else {
      //If user is not found
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports.verifyRecaptcha = function(req, res) {
	var clientServerOptions = {
		uri: 'https://www.google.com/recaptcha/api/siteverify?response='+ req.body.response +
		'&secret='+req.body.secret,
		body: JSON.stringify(req.body),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	}
	request(clientServerOptions, function (error, response) {
		console.log(error,response.body);
		res.status(200).json(response.body);
		return;
	});
};