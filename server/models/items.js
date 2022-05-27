const mongoose = require("mongoose");
const itemList = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
});
const shoppingList = new mongoose.Schema({
  name: String,
  items: [itemList],
});

module.exports = mongoose.model("Item", itemList);
module.exports = mongoose.model("Shopping", shoppingList);