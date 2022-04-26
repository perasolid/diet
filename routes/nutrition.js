const router = express.Router();
const routeProtection = require('./route-protection');
const ctrlNutrition = require('../controllers/nutrition');

router.use(routeProtection.checkUserAuthentication);

//retreving data from database
router.get('/all', ctrlNutrition.getAll);
router.get('/getNutritionsNameAndId', ctrlNutrition.getNutritionsNameAndId);
router.get('/withPagination', routeProtection.adminGuard.check('admin'), ctrlNutrition.getNutritionsByPagination);
router.get('/numberOfNutritions', routeProtection.adminGuard.check('admin'), ctrlNutrition.numberOfNutritions);
router.post('/add', ctrlNutrition.addNutrition);
router.put('/update/:id', routeProtection.adminGuard.check('admin'), ctrlNutrition.updateNutrition);
router.delete('/delete/:id', routeProtection.adminGuard.check('admin'), ctrlNutrition.deleteNutrition);

module.exports = router;