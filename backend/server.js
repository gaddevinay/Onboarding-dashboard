const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dashboardRoutes = require("./routes/dashboardRoutes");
const authRoutes = require("./routes/authRoutes");
const preferenceRoutes = require("./routes/preferenceRoutes");

dotenv.config();
const app = express();
app.use(cors({
  origin: "https://onboarding-dashboard-plum.vercel.app", // your Vercel frontend
  credentials: true
}));

app.use(express.json());

// DB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// Routes
app.use("/api", authRoutes);
app.use("/api", preferenceRoutes);
app.use("/api/dashboard-summary", dashboardRoutes);
app.get("/", (req, res) => res.send("API is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 