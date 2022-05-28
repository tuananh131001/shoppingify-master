const express = require("express");
const router = express.Router();
const User = require("../models/User");

//get all
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//find by id
router.get("/:id", getUser, (req, res) => {
  res.send(res.user);
});

router.post("/", async (req, res) => {

  const user = new User({
    name: req.body.name,
    categories: req.body.categories,
  });

  try {
    const newItem = await user.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.amount != null) {
    res.user.amount = req.body.categories;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted " });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});
async function getUser(req, res, next) {
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
module.exports = router;
