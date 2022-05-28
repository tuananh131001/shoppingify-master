const mongoose = require("mongoose");
const categoryList = new mongoose.Schema({
  name: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  items:  [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]
});

module.exports = mongoose.model("Category", categoryList);
