"use strict";

// const fs = require("fs");
// const rfs = require("rotating-file-stream");
// const path = require("path");

// const logDirectory = path.join(__dirname, "../production_logs");
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// const accessLogStream = rfs.createStream("access_log.txt", {
//   interval: "1d",
//   path: logDirectory,
// });

const development = {
  name: "development",
  asset_path: "/assets",
  session_cookie_key: "iYeftn9LMTf0KnzXSNMk",
  db: "csv_import"
  // morgan: {
  //   mode: "dev",
  //   options: { stream: accessLogStream },
  // },
};

module.exports = development;
