const router = express.Router();
const ctrlCompositeFood = require('../controllers/composite_food');

router.post('/add', ctrlCompositeFood.addCompositeFood);

module.exports = router;

