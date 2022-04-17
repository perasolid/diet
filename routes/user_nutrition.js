const router = express.Router();
const ctrlUser_nutrition = require('../controllers/user_nutrition');

//retreving data from database
router.get('/all', ctrlUser_nutrition.getAll);
router.get('/get-user-nutritions', ctrlUser_nutrition.getUser_nutrition);
router.post('/add', ctrlUser_nutrition.addUser_nutrition);
router.put('/update/:id', ctrlUser_nutrition.updateUser_nutrition);
router.delete('/delete/:id', ctrlUser_nutrition.deleteUser_nutrition);

module.exports = router;