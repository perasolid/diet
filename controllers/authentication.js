var passport = require('passport');
var User = mongoose.model('User');
var Verification_token = mongoose.model('Verification_token');
var Dri = mongoose.model('Dri');
const fs = require('fs');
const path = require('path');
var request = require('request');
const jwt = require('jsonwebtoken');
const emailConfig = require('../config/email');
const html_templates = require('../defaults/html_templates'); 

module.exports.register = function(req, res) {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).json({"message": "All fields required"});

  User.findOne({email: req.body.email})
  .then((user) => {
    if (user)
      return res.status(400).json({"message": "Email taken"});
    else {
      var user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
      user.setPassword(req.body.password);
      user.save()
      .then((insertedUser) => {
        let rawdata = fs.readFileSync(path.join(__dirname, '../defaults/dri.json'));
        let dri = JSON.parse(rawdata);
        dri.user_id = insertedUser._id;
        let newDri = new Dri(dri);
        newDri.save();

        const token = jwt.sign({"id": insertedUser._id}, process.env.SECRET, { expiresIn: '1d' });
        let url = "https://mydietaryhabits.herokuapp.com/users/verifyAccount?id=" + token;        
        let verification_token = new Verification_token({ email: insertedUser.email, token: token });
        verification_token.save()
        .then(() => {
          let mailOptions = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: 'Dietaty Habits - Account verification',
            html: html_templates.verification_email.replace(/####/g, url)
          };
          emailConfig.transport.sendMail(mailOptions).then(() => {
              return res.status(200).json({"message" : "A verification email has been sent to " + user.email
              + ". It will expire after one day. If you did not get a verification email, click on resend verification email."});
          });
        })
      });
    }
  })
  .catch((err) => {
    return res.status(500).send({msg:err.message});
  })

};

module.exports.resendVerificationToken = function(req, res) {
  Verification_token.findOne({email: req.body.email})
  .then((verificationToken) => {
    if (verificationToken === null)
      return res.status(404).json({"message": "No verification token for this email."})

    let url = "https://mydietaryhabits.herokuapp.com/users/verifyAccount?id=" + verificationToken.token;
    var mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: 'Dietaty Habits - Account verification',
      html: html_templates.verification_email.replace(/####/g, url)
    };
    emailConfig.transport.sendMail(mailOptions)
    .then(() => {
      return res.status(200).json({"message" : "A verification email has been resent to " + req.body.email + "."});
    });
  })
  .catch((err) => {
    return res.status(500).send({msg:err.message});
  })
}

module.exports.verifyAccount = function(req, res) {
  if (!req.query.id)
    return res.status(400).json({"message": "No id specified"})
  try {
    jwt.verify(req.query.id, process.env.SECRET, (err, decoded) => {
      if (err)
          return res.status(403).json({"message": "Invalid token"});
      else {
        let id = mongoose.Types.ObjectId(decoded.id);
        (async () => {
          let user = await User.findOne({ _id: id }).exec();
          if (!user)
            res.status(404).json({"message": "User does not exist."});
          else if (user.isVerified)
            res.status(200).json({"message": "Account is already verified."});
          else {
            User.updateOne({_id: id}, {isVerified: true}, (err) => {
                if(err)
                  res.status(400).send(err);
                else {
                  Verification_token.deleteOne({email: user.email}, function(err, result){
                    if(err)
                        res.status(500).json(err);
                    else
                        res.status(200).sendFile(path.join(__dirname, '../defaults/verifiedAccount.html'));
                  });
                }
              }
            );
          }
        })();
      }
    });
  } catch (err) {
      return res.status(403).json({"message": err.message});
  }
};

module.exports.login = function(req, res) {

  if(!req.body.email || !req.body.password)
    return res.status(400).json({"message": "All fields required"});

  passport.authenticate('local', function(err, user, info){
    if (err)
      return res.status(404).json(err);

    if(user){
      if(user.isVerified)
        res.status(200).json({"token": user.generateJwt()});
      else
        return res.status(401).json({msg:'Your Email has not been verified.'});
    } else {
      //If user is not found
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports.verifyRecaptcha = function(req, res) {
	let clientServerOptions = {
		uri: 'https://www.google.com/recaptcha/api/siteverify?response='+ req.body.response +
		'&secret='+req.body.secret,
		method: 'POST'
	}
	request(clientServerOptions, function (error, response) {
		return res.status(200).json(response.body);
	});
};