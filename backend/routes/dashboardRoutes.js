const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Dummy data for dashboard summary
router.get("/dashboard-summary", authMiddleware, (req, res) => {
  const data = {
    teamMembers: 8,
    projects: 15,
    notifications: 5,
  };
  res.json(data);
});

module.exports = router;
