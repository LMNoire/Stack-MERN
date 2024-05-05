const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({ 
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    createdOn: { type: Date, default: Date.now }
  });

module.exports = mongoose.model("User", userSchema);