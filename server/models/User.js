const mongoose = require("mongoose");

const userList = new mongoose.Schema({
  name: String,
  items: [
    { itemId: String , amount: Number },
  ],
});

module.exports = mongoose.model("User", userList);
