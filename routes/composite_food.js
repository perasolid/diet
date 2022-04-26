const router = express.Router();
const routeProtection = require('./route-protection');
const ctrlCompositeFood = require('../controllers/composite_food');

router.use(routeProtection.checkUserAuthentication);

router.post('/add', ctrlCompositeFood.addCompositeFood);

module.exports = router;

