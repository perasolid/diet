const router = express.Router();
const routeProtection = require('./route-protection');
const ctrlUserNutrition = require('../controllers/user-nutrition');

router.get('/all', routeProtection.adminGuard, ctrlUserNutrition.getAll);
router.get('/get-user-nutritions', ctrlUserNutrition.getUser_nutrition);
router.post('/add', ctrlUserNutrition.addUser_nutrition);
router.put('/update/:id', ctrlUserNutrition.updateUser_nutrition);
router.delete('/delete/:id', ctrlUserNutrition.deleteUser_nutrition);

module.exports = router;