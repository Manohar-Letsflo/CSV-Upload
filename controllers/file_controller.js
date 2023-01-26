"use strict";

const _ = require("underscore");

const FilesEntity = require("../models/files");

module.exports.details = async function (req, res) {
  console.log("req.params.id =", req.params.id);
  let id = req.params.id;

  let fileDetails = await FilesEntity.findById(id, { data: 1 });
  console.log("fileDetails =", fileDetails);
  if (!(fileDetails && fileDetails.data)) {
    let e = new Error(res.statusText);
    e.data = await res.json();
    throw e;
  }
  let data = fileDetails.data || [];
  let headers = Object.keys((Array.isArray(data) ? data : [data])[0]);
  return res.render("file", {
    title: "File Details",
    records: data,
    headers
  });
};
