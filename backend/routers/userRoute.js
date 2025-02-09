const express = require("express");
const createUser = require("../controller/userController.js"); // Doğrudan fonksiyonu alıyoruz

const router = express.Router();

router.route('/register').post(createUser); // userController.createUser yerine direkt createUser

module.exports = router;