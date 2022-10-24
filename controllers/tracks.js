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
  const itemBody = req.body;
  console.log(itemBody);
  //const data = await tracksModel.create(body);
  res.send({ algo: 1 });
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
