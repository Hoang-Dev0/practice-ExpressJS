const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/Nodemy");

const accountSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { collection: "account" }
);

const AccountModel = mongoose.model("account", accountSchema);

module.exports = AccountModel;
