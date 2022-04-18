const router = express.Router();
const jwt = require('express-jwt');

const checkUserAuthentication = jwt({
  secret: process.env.SECRET,
  userProperty: 'payload',
  algorithms: ['HS256']
});

const adminGuard = require('express-jwt-permissions')({
  requestProperty: 'payload',
  permissionsProperty: 'role'
})

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlUser = require('../controllers/users');

// profile
router.get('/profile', checkUserAuthentication, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/resend-verification-email', ctrlAuth.resendVerificationToken);
router.get('/verifyAccount', ctrlAuth.verifyAccount);
router.post('/verifyRecaptcha', ctrlAuth.verifyRecaptcha)
router.post('/login', ctrlAuth.login);

//from database
router.get('/all', checkUserAuthentication, adminGuard.check('admin'), ctrlUser.getAll);
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