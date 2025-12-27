const express = require("express");
const router = express.Router();
const {
  createTopic,
  getTopicsByGoal,
  updateTopic
} = require("../controllers/topicController");

const auth = require("../middleware/authMiddleware");


router.post("/", auth, createTopic);
router.get("/:goalId", auth, getTopicsByGoal);
router.put("/:id", auth, updateTopic);   // ✅ ADD THIS

module.exports = router;
