const { matchedData } = require("express-validator");
const { encrypt } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");

/**
 * This controller is used to register a user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

/**
 * This controller is gonna handle the user login
 * @param req
 * @param res
 * @returns {Promise<void>}
 */

const loginCtrl = async (req, res) => {
  try {
  } catch (e) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

module.exports = { loginCtrl: registerCtrl };
