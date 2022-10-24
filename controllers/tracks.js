const { tracksModel } = require("../models");

/**
 * Obtener lista de la base datos!
 * @param req
 * @param res
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
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
  const { body } = req;
  console.log(body);
  const data = await tracksModel.create(body);
  res.send({ data });
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
