const express = require("express");
const router = express.Router();
const Joi = require("joi");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const { registerUser, loginUser, getProfile } = require("../controllers/authController");

// PATCH /api/profile — update name/email
const profileSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  email: Joi.string().email(),
});

router.patch("/profile", authMiddleware, async (req, res) => {
  const { error } = profileSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;

    await user.save();
    res.json({ message: "Profile updated", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Other routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);
router.patch("/profile", authMiddleware, updateProfile);
module.exports = router;
