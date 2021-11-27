const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    isComplete: { type: Boolean, default: false },
    text: { type: String, required: true },
    reference: { type: String, required: false, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
