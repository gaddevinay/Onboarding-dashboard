const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  savePreferences,
  getPreferences
} = require("../controllers/preferenceController");

router.post("/preferences", auth, savePreferences);
router.get("/preferences", auth, getPreferences);

module.exports = router;
