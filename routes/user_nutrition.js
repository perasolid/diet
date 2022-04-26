const router = express.Router();
const routeProtection = require('./route-protection');
const ctrlUser_nutrition = require('../controllers/user_nutrition');

router.use(routeProtection.checkUserAuthentication);

//retreving data from database
router.get('/all', routeProtection.adminGuard.check('admin'), ctrlUser_nutrition.getAll);
router.get('/get-user-nutritions', ctrlUser_nutrition.getUser_nutrition);
router.post('/add', ctrlUser_nutrition.addUser_nutrition);
router.put('/update/:id', ctrlUser_nutrition.updateUser_nutrition);
router.delete('/delete/:id', ctrlUser_nutrition.deleteUser_nutrition);

module.exports = router;