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
const { authMiddleware } = require("../middlewares/session");
const { checkRole } = require("../middlewares/role");

/**
 * List the items
 */

router.get("/", authMiddleware, getItems);

/**
 * Obtains details of an item
 */

router.get("/:id", authMiddleware, validatorGetItem, getItem);

/**
 * Create a new item
 */

router.post(
  "/",
  authMiddleware,
  checkRole(["admin"]),
  validatorCreateItem,
  createItem
);

/**
 * Updates an item
 */

router.put(
  "/:id",
  authMiddleware,
  validatorGetItem,
  validatorCreateItem,
  updateItem
);

/**
 * Borrar un registro
 */

router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;
