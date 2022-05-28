const mongoose = require("mongoose");

const userList = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("User", userList);
