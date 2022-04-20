const router = express.Router();
const jwt = require('express-jwt');

const checkUserAuthentication = jwt({
  secret: process.env.SECRET,
  userProperty: 'payload',
  algorithms: ['HS256']
}).unless({
  path: ['/login', '/register', '/resend-verification-email',
         '/verifyAccount', '/verifyRecaptcha'].map(relativeRoute => '/users' + relativeRoute)
});

const adminGuard = require('express-jwt-permissions')({
  requestProperty: 'payload',
  permissionsProperty: 'role'
})

const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');
const ctrlUser = require('../controllers/users');

router.use(checkUserAuthentication);

// profile
router.get('/profile', ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/resend-verification-email', ctrlAuth.resendVerificationToken);
router.get('/verifyAccount', ctrlAuth.verifyAccount);
router.post('/verifyRecaptcha', ctrlAuth.verifyRecaptcha)
router.post('/login', ctrlAuth.login);

//from database
router.get('/all', adminGuard.check('admin'), ctrlUser.getAll);
router.get('/withPagination', adminGuard.check('admin'), ctrlUser.getUsersByPagination);
router.get('/numberOfUsers', adminGuard.check('admin'), ctrlUser.numberOfUsers);
router.post('/add', adminGuard.check('admin'), ctrlUser.addUser);
router.put('/update/:id', adminGuard.check('admin'), ctrlUser.updateUser);
router.put('/admin/update/:id', adminGuard.check('admin'), ctrlUser.updateUserByAdmin);
router.post('/hash', adminGuard.check('admin'), ctrlUser.getHash);
router.delete('/delete/:id', adminGuard.check('admin'), ctrlUser.deleteUser);

//reset password
router.put('/resetPassword', adminGuard.check('admin'), ctrlUser.resetPassword);

module.exports = router;