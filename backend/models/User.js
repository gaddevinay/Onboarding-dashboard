const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  company: { type: String, default: "" },
  industry: { type: String, default: "" },
  size: { type: String, default: "" },
  theme: { type: String, default: "light" },
  layout: { type: String, default: "grid" },
});

module.exports = mongoose.model("User", userSchema);
