const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require("mongoose");
const itemList = new mongoose.Schema({
  name: { type: String, unique: true, dropDups: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});
itemList.plugin(uniqueValidator);

module.exports = mongoose.model("Item", itemList);
