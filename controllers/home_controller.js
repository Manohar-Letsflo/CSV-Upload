"use strict";

const csv = require("csvtojson");
const { filesize } = require("filesize");

const FilesEntity = require("../models/files");

module.exports.home = async function (req, res) {
  try {
    let csvFiles = await FilesEntity.find({}, { filename: 1, size: 1 });
    console.log("csvFiles =", csvFiles);
    return res.render("home", {
      title: "CSV Upload",
      csv_files: csvFiles
    });
  } catch (err) {
    console.log("Error", err);
    return;
  }
};
module.exports.uploadFile = async function (req, res) {
  try {
    console.log();
    console.log("req.file =", req.file);
    let uploadedFileConfig = req.file || {};
    let q = {
      filename: uploadedFileConfig.originalname
    };
    let data = await csv().fromFile(uploadedFileConfig.path);
    let uploadData = {
      ...q,
      data,
      size: isNaN(uploadedFileConfig.size)
        ? 0
        : filesize(uploadedFileConfig.size),
      destination: uploadedFileConfig.destination,
      uploaded_filename: uploadedFileConfig.filename,
      path: uploadedFileConfig.path
    };
    let isUpdated = await FilesEntity.updateOne(q, uploadData);
    if (!(isUpdated && isUpdated.modifiedCount)) {
      await FilesEntity.create(uploadData);
    }
    return res.redirect("back");
  } catch (err) {
    console.log("Error", err);
    return;
  }
};
module.exports.deleteFile = async function (req, res) {
  try {
    let id = req.params.id;
    await FilesEntity.deleteOne({ _id: id });
    return res.redirect("back");
  } catch (error) {
    console.log("error =", error);
  }
};
