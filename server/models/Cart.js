// const uniqueValidator = require("mongoose-unique-validator");

const mongoose = require("mongoose");

const cartList = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    index: true,
    unique: true,
  },
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",

      },
    },
  ],
  amount: Number,
});

// cartList.plugin(uniqueValidator);

module.exports = mongoose.model("Cart", cartList);
