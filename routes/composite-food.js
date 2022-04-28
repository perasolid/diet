const router = express.Router();
const ctrlCompositeFood = require('../controllers/composite-food');

router.post('/add', ctrlCompositeFood.addCompositeFood);

module.exports = router;

