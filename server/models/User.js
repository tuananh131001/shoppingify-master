const uniqueValidator = require("mongoose-unique-validator");

const mongoose = require("mongoose");

const userList = new mongoose.Schema({
  name: { type: String, index: true, unique: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cart" }],
});
userList.plugin(uniqueValidator);

module.exports = mongoose.model("User", userList);
