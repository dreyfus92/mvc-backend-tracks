const express = require("express");
const router = express.Router();
const {
  getItems,
  createItem,
  getItem,
  updateItem,
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
 * Actualizar un registro un registro
 */

router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

module.exports = router;
