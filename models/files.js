"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    filename: { type: String },
    destination: { type: String },
    uploaded_filename: { type: String },
    path: { type: String },
    size: { type: String },
    data: { type: Array }
  },
  { timestamps: true }
);

const Files = mongoose.model("Files", userSchema);

module.exports = Files;
