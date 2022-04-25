const router = express.Router();
const routeProtection = require('./route-protection');

const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');
const ctrlUser = require('../controllers/users');

router.use(routeProtection.checkUserAuthentication);

// profile
router.get('/profile', ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/resend-verification-email', ctrlAuth.resendVerificationToken);
router.get('/verifyAccount', ctrlAuth.verifyAccount);
router.post('/verifyRecaptcha', ctrlAuth.verifyRecaptcha)
router.post('/login', ctrlAuth.login);

//from database
router.get('/all', routeProtection.adminGuard.check('admin'), ctrlUser.getAll);
router.get('/withPagination', routeProtection.adminGuard.check('admin'), ctrlUser.getUsersByPagination);
router.get('/numberOfUsers', routeProtection.adminGuard.check('admin'), ctrlUser.numberOfUsers);
router.post('/add', routeProtection.adminGuard.check('admin'), ctrlUser.addUser);
router.put('/update/:id', routeProtection.adminGuard.check('admin'), ctrlUser.updateUser);
router.put('/admin/update/:id', routeProtection.adminGuard.check('admin'), ctrlUser.updateUserByAdmin);
router.post('/hash', routeProtection.adminGuard.check('admin'), ctrlUser.getHash);
router.delete('/delete/:id', routeProtection.adminGuard.check('admin'), ctrlUser.deleteUser);

//reset password
router.put('/resetPassword', routeProtection.adminGuard.check('admin'), ctrlUser.resetPassword);

module.exports = router;