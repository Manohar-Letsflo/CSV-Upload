"use strict";

const express = require("express");
const router = express.Router();

const fileController = require("../controllers/file_controller");

router.get("/params/:id", fileController.details);

module.exports = router;
