const express = require("express");
const router = express.Router();
const { encrypt, compare } = require("../utils/handlePassword");
const { matchedData } = require("express-validator");
const { validatorRegister } = require("../validators/auth");
const { usersModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");
const { loginCtrl } = require("../controllers/auth");

/**
 * Create a user
 */

router.post("/register", validatorRegister, async (req, res) => loginCtrl);

/**
 *
 */

router.post("/register", validatorRegister, async (req, res) => loginCtrl);

module.exports = router;
