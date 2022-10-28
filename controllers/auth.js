const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
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
    req = matchedData(req);
    const user = await usersModel
      .findOne({ email: req.email })
      .select("password name role email");
    if (!user) {
      handleHttpError(res, "USER_NOT_FOUND", 404);
    }

    const hashPassword = user.get("password");
    const check = await compare(req.password, hashPassword);

    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
    }

    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

module.exports = { loginCtrl, registerCtrl };
