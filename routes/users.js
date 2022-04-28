const router = express.Router();
const routeProtection = require('./route-protection');

const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');
const ctrlUser = require('../controllers/users');

// Profile
router.get('/profile', ctrlProfile.profileRead);

// Authentication
router.post('/register', ctrlAuth.register);
router.post('/resend-verification-email', ctrlAuth.resendVerificationToken);
router.get('/verifyAccount', ctrlAuth.verifyAccount);
router.post('/verifyRecaptcha', ctrlAuth.verifyRecaptcha)
router.post('/login', ctrlAuth.login);

// CRUD
router.get('/all', routeProtection.adminGuard, ctrlUser.getAll);
router.get('/withPagination', routeProtection.adminGuard, ctrlUser.getUsersByPagination);
router.get('/numberOfUsers', routeProtection.adminGuard, ctrlUser.numberOfUsers);
router.post('/add', routeProtection.adminGuard, ctrlUser.addUser);
router.put('/update/:id', routeProtection.adminGuard, ctrlUser.updateUser);
router.put('/admin/update/:id', routeProtection.adminGuard, ctrlUser.updateUserByAdmin);
router.post('/hash', routeProtection.adminGuard, ctrlUser.getHash);
router.delete('/delete/:id', routeProtection.adminGuard, ctrlUser.deleteUser);

// Reset password
router.put('/resetPassword', routeProtection.adminGuard, ctrlUser.resetPassword);

module.exports = router;