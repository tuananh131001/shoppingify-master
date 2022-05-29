const express = require("express");
const router = express.Router();
const User = require("../models/User");
const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const postUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    items: req.body.item,
  });

  try {
    const newUser = await user.save();

    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const addItemToCart = function (itemId, userId, amount) {
  return User.findByIdAndUpdate(
    userId,
    { $push: { items: { itemid: itemId, amount: amount } } },
    { new: true, useFindAndModify: false }
  );
};
const addCart = async (req, res) => {
  try {
    const cart = await addItemToCart(
      req.body.item,
      req.body.user,
      req.body.amount
    );
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteUser =
  (getId,
  async (req, res) => {
    try {
      await res.user.remove();
      res.json({ message: "Deleted " });
    } catch (error) {
      res.status(500).json({ message: err.message });
    }
  });

async function getId(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

module.exports = {
  getUser,
  postUser,
  deleteUser,
  addCart,
};
