"use strict";

const bunyan = require("bunyan");
const fs = require("fs-extra");
const env = require("../config/environment");

module.exports = config => {
  let name = "CSV-Upload";
  let filename = "app.log";
  let logDir = env.logDir;

  fs.ensureDirSync(logDir);

  let streams = [
    {
      type: "rotating-file",
      path: logDir + "/" + filename,
      period: "1h",
      count: 36
    }
  ];

  if (!process.env.NODE_ENV) {
    streams.push({ stream: process.stdout });
  }

  return bunyan.createLogger({ name, streams });
};
