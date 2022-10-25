const express = require("express");
const router = express.Router();
const { createItem } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");

router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
