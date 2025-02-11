const express = require("express");
const { createUser, loginUser } = require("../controller/userController.js");
const router = express.Router();

router.route('/register').post(createUser); // userController.createUser yerine direkt createUser
router.route('/login').post(loginUser);

module.exports = router;