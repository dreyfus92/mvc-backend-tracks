const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem } = require("../controllers/tracks");
const { validatorCreateItem } = require("../validators/tracks");

//TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems);
router.post("/", validatorCreateItem, createItem);

module.exports = router;
