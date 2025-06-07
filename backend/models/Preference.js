const mongoose = require("mongoose");

const preferenceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  theme: { type: String, default: "light" },
  layout: { type: String, default: "grid" }
});

module.exports = mongoose.model("Preference", preferenceSchema);
