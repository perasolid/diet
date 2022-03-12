var router = express.Router();
var jwt = require('express-jwt');

var auth = jwt({
  secret: process.env.SECRET,
  userProperty: 'payload',
  algorithms: ['HS256']
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlUser = require('../controllers/users');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/resend-verification-email', ctrlAuth.resendVerificationToken);
router.get('/verifyAccount', ctrlAuth.verifyAccount);
router.post('/verifyRecaptcha', ctrlAuth.verifyRecaptcha)
router.post('/login', ctrlAuth.login);

//from database
router.get('/all', ctrlUser.getAll);
router.get('/withPagination', ctrlUser.getUsersByPagination);
router.get('/numberOfUsers', ctrlUser.numberOfUsers);
router.post('/add', ctrlUser.addUser);
router.put('/update/:id', ctrlUser.updateUser);
router.put('/admin/update/:id', ctrlUser.updateUserByAdmin);
router.post('/hash', ctrlUser.getHash);
router.delete('/delete/:id', ctrlUser.deleteUser);

//reset password
router.put('/resetPassword', ctrlUser.resetPassword);

module.exports = router;