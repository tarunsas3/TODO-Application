const router = require("express").Router();
const Data = require("../models/Data");

//CREATE
router.post("/list", async (req, res) => {
  const newItem = new Data({
    id: req.body.id,
    text: req.body.text,
    reference: req.body.reference,
  });
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

//READ
router.get("/items", async (req, res) => {
  try {
    const items = await Data.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/delete", async (req, res) => {
  try {
    const deletedItem = await Data.findOneAndRemove({
      id: req.body.id,
    });
    res.status(200).json(deletedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
