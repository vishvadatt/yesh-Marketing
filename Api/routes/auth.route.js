const router = require('express').Router();
const authCtrl = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth');
const { uploadS3 } = require('../helpers/commonfile');

router.route('/login')
    .post(authCtrl.login);
router.route('/signup')
    .post(authCtrl.signup);
router.route('/forgot-password')
    .post(authCtrl.forgotPassword);
router.route('/reset-password')
    .post(authCtrl.resetPassword)
router.route('/verifyotp')
    .post(authCtrl.verifyotp);
router.route('/change-password')
    .put(protect,authCtrl.changePassword);

module.exports = router;