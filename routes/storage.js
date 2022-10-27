const express = require("express");
const router = express.Router();
const {
  createItem,
  getItems,
  getItem,
  deleteItem,
} = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");

/**
 * Lista de Items
 */

router.get("/", getItems);

/**
 * Obtener detalle
 */

router.get("/:id", validatorGetItem, getItem);

/**
 * Borrar registro
 */

router.delete("/:id", validatorGetItem, deleteItem);

/**
 * Crear registro
 */

router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
