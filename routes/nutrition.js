const router = express.Router();
const ctrlNutrition = require('../controllers/nutrition');

//retreving data from database
router.get('/all', ctrlNutrition.getAll);
router.get('/getNutritionsNameAndId', ctrlNutrition.getNutritionsNameAndId);
router.get('/withPagination', ctrlNutrition.getNutritionsByPagination);
router.get('/numberOfNutritions', ctrlNutrition.numberOfNutritions);
router.post('/add', ctrlNutrition.addNutrition);
router.put('/update/:id', ctrlNutrition.updateNutrition);
router.delete('/delete/:id', ctrlNutrition.deleteNutrition);

module.exports = router;