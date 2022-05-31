const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const getCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postCart = async (req, res) => {
  const cart = new Cart({
    category: req.body.category,
  });
  try {
    const newCart = await cart.save();
    const items = newCart.items;
    items.push({ item: req.body.item });
    res.cart.items = items;

    const newItem = await res.cart.save();

    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// const updateCart = async (req, res) => {
//   res.cart = await getUser(req, res);
//   const items = res.cart.items;
//   items.push({ item: req.body.item });
//   res.cart.items = items;
//   try {
//     const newItem = await res.cart.save();
//     res.status(201).json(newItem);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
// async function getUser(req, res) {
//   let cart;
//   try {
//     cart = await Cart.findOne({ category: req.body.category });
//     if (cart == null) {
//       return res.status(404).json({ message: "Cannot find subscriber" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
//   return cart;
// }
module.exports = {
  getCart,
  postCart,
  //   updateCart,
};
