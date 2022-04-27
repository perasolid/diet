const router = express.Router();
const routeProtection = require('./route-protection');
const ctrlDri = require('../controllers/dri');

router.get('/all', routeProtection.adminGuard.check('admin'), ctrlDri.getAll);
router.get('/user-dris/:id', ctrlDri.getUserDris);
router.get('/user-active-dri/:id', ctrlDri.getUserActiveDri);
router.post('/add', ctrlDri.addDri);
router.put('/setStatusToActive', ctrlDri.setStatusToActive);
router.put('/update/:id', ctrlDri.updateDri);
router.delete('/delete/:id', ctrlDri.deleteDri);

module.exports = router;