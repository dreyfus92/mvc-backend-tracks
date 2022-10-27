const bcryptjs = require("bcryptjs");

/**
 * Password without encryption e.g. hello01
 * @param passwordPlain
 * @returns {Promise<*>}
 */

const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};

/**
 *
 * @param passwordPlain
 * @param hashPassword
 * @returns {Promise<void>}
 */ const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };
