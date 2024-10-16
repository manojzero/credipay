const express = require('express');
const usercontroller = require('../controllers/user.controller')
const ApiError = require('../utils/ApiError')
const router = express.Router();
const auth = require('../middleware/auth')
// router.get("/getalluserlist", auth, usercontroller.getAllUsersList);
// router.get("/getalluserlist/:id", auth, usercontroller.getUserId);
// router.post("/create-user", auth, usercontroller.createUser);
router.put("/update-user/:id", auth, usercontroller.updateUser);
router.get("/get-userbyid", auth, usercontroller.getuserbyId);
// app.use('/api/', router);
// router.use('/api', router)
module.exports = router;