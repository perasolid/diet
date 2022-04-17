const User = mongoose.model('User');
const crypto = require('crypto');
const email_config = require('../config/email');
const html_templates = require('../defaults/html_templates');

module.exports.getAll = (req, res) => {
	const regex = new RegExp(req.query.search, 'i');
	User.find({ name: { $regex: regex } })
		.sort({ _id: -1 })
		.exec((err, doc) => {
			if (err)
				return res.status(500).json(err);
			res.status(200).json(doc);
		});
};

module.exports.addUser = (req, res) => {
	if (!req.body.name || !req.body.email || !req.body.password)
		return res.status(400).json({ "message": "All fields required" });

	User.findOne({ email: req.body.email }, (err, user) => {
		if (err)
			return console.log(err);
		if (user)
			return res.status(400).json({ "message": "Email taken" });
		else {
			let user = new User();
			user.name = req.body.name;
			user.email = req.body.email;
			user.setPassword(req.body.password);
			user.save().then(() => {
				res.status(200).json({ "message": "User created successfully" });
			});
		}
	});
};

module.exports.updateUser = (req, res) => {
	if (req.body.newPassword !== '')
		req.body.hash = crypto.pbkdf2Sync(req.body.newPassword, req.body.salt, 1000, 64, 'sha512').toString('hex');
	User.findOneAndUpdate({ _id: req.params.id }, {
		$set: req.body
	},
		(err, result) => {
			if (err)
				res.json(err);
			else
				res.json(result);
		});
};

module.exports.updateUserByAdmin = (req, res) => {
	User.findOneAndUpdate({ _id: req.params.id }, {
		$set: {
			name: req.body.name,
			email: req.body.email,
			role: req.body.role
		}
	},
		(err, result) => {
			if (err)
				res.json(err);
			else
				res.json(result);
		});
};

module.exports.getHash = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ hash: crypto.pbkdf2Sync(req.body.currentPassword, req.body.salt, 1000, 64, 'sha512').toString('hex') }));
};

module.exports.deleteUser = (req, res) => {
	User.remove({ _id: req.params.id }, (err, result) => {
		if (err)
			res.json(err);
		else
			res.json(result);
	});
};

function makeid(length) {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
	let charactersLength = characters.length;
	for (let i = 0; i < length; i++)
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	return result;
}

module.exports.resetPassword = (req, res) => {
	const password = makeid(10);
	User.findOneAndUpdate({ _id: req.body._id }, {
		$set: {
			hash: crypto.pbkdf2Sync(password, req.body.salt, 1000, 64, 'sha512').toString('hex')
		}
	})
		.then(() => {
			let mailOptions = {
				from: process.env.EMAIL,
				to: req.body.email,
				subject: 'Reset password',
				html: html_templates.reset_password.replace(/####/g, password)
			};
			email_config.transport.sendMail(mailOptions, (err) => {
				if (err)
					res.status(503).json({ "message": err.message });
				else
					res.status(200).json({ "message": "Password reset successfully!" });
			});
		})
		.catch((err) => {
			res.status(503).json({ "message": err.message });
		})
}

module.exports.getUsersByPagination = (req, res) => {
	const pageOptions = {
		page: parseInt(req.query.page, 10) || 0,
		limit: parseInt(req.query.limit, 10) || 10
	}
	User.find()
		.sort({ _id: -1 })
		.skip(pageOptions.page * pageOptions.limit)
		.limit(pageOptions.limit)
		.exec((err, doc) => {
			if (err)
				return res.status(500).json(err);
			res.status(200).json(doc);
		});
}

module.exports.numberOfUsers = (req, res) => {
	User.countDocuments()
		.exec((err, doc) => {
			if (err)
				return res.status(500).json(err);
			res.status(200).json({ "numberOfUsers": doc });
		});
}