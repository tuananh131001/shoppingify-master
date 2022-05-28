const express = require("express");
const Category = require("../models/Category");
const router = express.Router();
const Item = require("../models/Item");
const getItem = async (req, res) => {
  try {
    const item = await Item.find();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addItemToCategory = function (categoryId, item) {
  return Category.findByIdAndUpdate(
    categoryId,
    { $push: { items: item._id } },
    { new: true, useFindAndModify: false }
  );
};

const postItem = async (req, res) => {
  const category = new Category({
    name: req.body.name,
  });
  category.users.push(req.body.user)

  try {
    const newItem = await category.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteItem =
  (getId,
  async (req, res) => {
    try {
      await res.category.remove();
      res.json({ message: "Deleted " });
    } catch (error) {
      res.status(500).json({ message: err.message });
    }
  });

async function getId(req, res, next) {
  let user;
  try {
    category = await Category.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.category = usecategoryr;
  next();
}

module.exports = {
  getItem,
  postItem,
  deleteItem,
};
