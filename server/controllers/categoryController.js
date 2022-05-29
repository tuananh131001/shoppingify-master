const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addUserToCategory = function (categoryId, user) {
  return Category.findByIdAndUpdate(
    categoryId,
    { $push: { tags: user._id } },
    { new: true, useFindAndModify: false }
  );
};

const postCategory = async (req, res) => {
  const category = new Category({
    name: req.body.name,
  });
  category.users.push(req.body.user);

  try {
    const newItem = await category.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    res.category = await getId(req, res);
    await res.category.remove();
    res.json({ message: "Deleted " });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

async function getId(req, res) {
  let category;
  try {
    category = await Category.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  return category;
}

module.exports = {
  getCategory,
  postCategory,
  deleteCategory,
};
