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

/**
 * Actualizar un registro
 */

router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Borrar un registro
 */

router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
