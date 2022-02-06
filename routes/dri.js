var express = require('express');
var router = express.Router();
const Dri = require('../models/dri');

var ctrlDri = require('../controllers/dri');

//retreving data from database
router.get('/all', ctrlDri.getAll);
router.get('/user-dris/:id', ctrlDri.getUserDris);
router.get('/user-active-dri/:id', ctrlDri.getUserActiveDri);
router.post('/add', ctrlDri.addDri);
router.put('/setStatusToActive', ctrlDri.setStatusToActive);
router.put('/update/:id', ctrlDri.updateDri);
router.delete('/delete/:id', ctrlDri.deleteDri);

module.exports = router;