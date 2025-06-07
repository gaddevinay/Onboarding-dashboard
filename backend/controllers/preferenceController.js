const Preference = require("../models/Preference");

exports.savePreferences = async (req, res) => {
  try {
    const { theme, layout } = req.body;
    const pref = await Preference.findOneAndUpdate(
      { user: req.userId },
      { theme, layout },
      { upsert: true, new: true }
    );
    res.json(pref);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPreferences = async (req, res) => {
  try {
    const pref = await Preference.findOne({ user: req.userId });
    if (!pref) return res.status(404).json({ message: "No preferences found" });
    res.json(pref);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
