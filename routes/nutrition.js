const router = express.Router();
const routeProtection = require('./route-protection');
const ctrlNutrition = require('../controllers/nutrition');

router.get('/all', ctrlNutrition.getAll);
router.get('/getNutritionsNameAndId', ctrlNutrition.getNutritionsNameAndId);
router.get('/withPagination', routeProtection.adminGuard, ctrlNutrition.getNutritionsByPagination);
router.get('/numberOfNutritions', routeProtection.adminGuard, ctrlNutrition.numberOfNutritions);
router.post('/add', ctrlNutrition.addNutrition);
router.put('/update/:id', routeProtection.adminGuard, ctrlNutrition.updateNutrition);
router.delete('/delete/:id', routeProtection.adminGuard, ctrlNutrition.deleteNutrition);

module.exports = router;