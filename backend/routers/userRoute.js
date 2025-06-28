const express = require("express");
const { createUser, loginUser, updateProgress } = require("../controller/userController.js");
const router = express.Router();

router.route('/register').post(createUser); // userController.createUser yerine direkt createUser
router.route('/login').post(loginUser);
router.route("/update-progress").post(updateProgress);

module.exports = router;