"use strict";

const routerLogs = require("../logger/router_log");
const express = require("express");
const router = express.Router();

const fileController = require("../controllers/file_controller");

router.get(
  "/params/:id",
  routerLogs("Before"),
  fileController.details,
  routerLogs("After")
);

module.exports = router;
