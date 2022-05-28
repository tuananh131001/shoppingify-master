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

const categoryList = new mongoose.Schema({
  name: String,
  items: [itemList],
});

const userList = new mongoose.Schema({
  name: String,
  categories: [categoryList],
});

module.exports = mongoose.model("Item", itemList);
module.exports = mongoose.model("Categories", categoryList);
module.exports = mongoose.model("User", userList);
