const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * Obtener lista de la base datos!
 * @param req
 * @param res
 */
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

/**
 * Obtener un detalle
 * @param req
 * @param res
 */
const getItem = (req, res) => {};

/**
 * Insertar un registro
 * @param req
 * @param res
 */
const createItem = async (req, res) => {
  try {
    const { body } = req;
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

/**
 * Actualizar un registro
 * @param req
 * @param res
 */
const updateItem = (req, res) => {};

/**
 * Borrar un registro
 * @param req
 * @param res
 */
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
