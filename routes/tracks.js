const express = require("express");
const router = express.Router();
const { getItems, createItem, getItem } = require("../controllers/tracks");
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
