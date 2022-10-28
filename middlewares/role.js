/**
 * Array with permitted roles
 * @type {(function(*, *, *): void)|*}
 */
const { handleHttpError } = require("../utils/handleError");

const checkRole = (role) => (req, res, next) => {
  try {
    const { user } = req;
    console.log({ user });
    const rolesByUser = user.role;

    const checkValueRole = role.some((roleSingle) =>
      rolesByUser.includes(roleSingle)
    );
    if (!checkValueRole) {
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
    }

    next();
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403);
  }
};

module.exports = { checkRole };
