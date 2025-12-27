const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/topics", require("./routes/topicRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/gamification", require("./routes/gamificationRoutes"));

// Test Route
app.get("/", (req, res) => {
  res.send("SkillSync API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
