const router = require('express').Router();
const billCtrl = require('../controllers/bill.controller');
const { protect } = require('../middleware/auth');
const { uploadS3 } = require('../helpers/commonfile');

router.route('/create-Bill').post(billCtrl.createBill);
router.route('/findOne-Bill/:id').get(billCtrl.findOneBill);
router.route('/Bills').get(billCtrl.getAllBills);

module.exports = router;