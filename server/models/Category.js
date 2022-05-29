const mongoose = require("mongoose");
const categoryList = new mongoose.Schema({
  name: String,
  items:  [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]
});

module.exports = mongoose.model("Category", categoryList);
