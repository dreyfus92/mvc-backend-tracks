const express = require("express");
const router = express.Router();
const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");

/**
 * List los items
 */

router.get("/", getItems);

/**
 * Obtener detalles sobre un item
 */

router.get("/:id", validatorGetItem, getItem);

/**
 * Crear un registro
 */

router.post("/", validatorCreateItem, createItem);

module.exports = router;

/**
 * Actualizar un registro
 */

router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

module.exports = router;

/**
 * Borrar un registro
 */

router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
