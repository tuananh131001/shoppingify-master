const express = require("express");
const router = express.Router();
const Item = require("../models/items");

//get all
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//find by id
router.get("/:id", getItem, (req, res) => {
  res.send(res.item);
});

router.post("/", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    amount: req.body.amount,
  });
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/", getItem, async (req, res) => {
  if (req.body.name != null) {
    res.item.name = req.body.name;
  }
  if (req.body.amount != null) {
    res.item.amount = req.body.amount;
  }
  try {
    const updatedItem = await res.item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.delete("/:id", getItem, async (req, res) => {
  try {
    await res.item.remove();
    res.json({ message: "Deleted " });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});
async function getItem(req, res, next) {
  let item;
  try {
    item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.item = item;
  next();
}
module.exports = router;
