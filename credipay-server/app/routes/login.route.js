const express = require('express');
const logincontroller = require('../controllers/login.controller.js')
const router = express.Router();
router.post('/user-login',logincontroller.getUserLogin);
router.post('/user-logout',logincontroller.logout);
router.post('/token-refresh',logincontroller.tokenRefresh);
// app.use('/api/', router);
// router.use('/api', router)
module.exports = router;