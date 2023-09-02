const router = require('express').Router();
const userCtrl = require('../controllers/user.controller');
const { protect } = require('../middleware/auth');
const { uploadS3 } = require('../helpers/commonfile');

router.route('/create-user').post(userCtrl.createUser);
router.route('/fineone-user/:id').get(userCtrl.findOneUser);
router.route('/get-users').get(userCtrl.getAllUser);
router.route('/update-user/:id').put(userCtrl.updateUser);
router.route('/delete-user/:id').delete(userCtrl.deleteUser);

module.exports = router;