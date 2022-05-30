const uniqueValidator = require("mongoose-unique-validator");

const mongoose = require("mongoose");

const userList = new mongoose.Schema({
  name: { type: String, unique: true },
  cart: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        unique: true,
        dropDups: true,
      },
      items: [
        {
          _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
            unique: true,
            dropDups: true,
          },
          amount: Number,
        },
      ],
    },
  ],
});
userList.plugin(uniqueValidator);

module.exports = mongoose.model("User", userList);
