"use strict";

const express = require("express");
const multer = require("multer");
const PATH = require("path");

let UploadPath = PATH.join(__dirname, "../uploads");
const upload = multer({ dest: UploadPath });

const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("router loaded");
router.get("/", homeController.home);
router.use("/file", require("./file"));
router.get("/delete/:id", homeController.deleteFile);
router.post(
  "/upload",
  upload.single("uploaded_file"),
  homeController.uploadFile
);

module.exports = router;
