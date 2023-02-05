"use strict";

const routerLogs = require("../logger/router_log");
const express = require("express");
const multer = require("multer");
const PATH = require("path");

let UploadPath = PATH.join(__dirname, "../uploads");
const upload = multer({ dest: UploadPath });

const router = express.Router();
const homeController = require("../controllers/home_controller");

logger.info("router loaded");
router.get("/", routerLogs("Before"), homeController.home, routerLogs("After"));
router.use("/file", require("./file"));
router.get(
  "/delete/:id",
  routerLogs("Before"),
  homeController.deleteFile,
  routerLogs("After")
);
router.post(
  "/upload",
  upload.single("uploaded_file"),
  homeController.uploadFile
);

module.exports = router;
