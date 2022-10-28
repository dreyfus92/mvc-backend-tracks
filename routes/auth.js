const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");
const { loginCtrl, registerCtrl } = require("../controllers/auth");

/**
 * Create a user
 */

router.post("/register", validatorRegister, registerCtrl);

/**
 * Login a user
 */

router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
