const mongoose = require("mongoose");
const itemList = new mongoose.Schema({
  name: String,
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

module.exports = mongoose.model("Item", itemList);
