const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const topicController = require("../controllers/topicController");

router.post("/", auth, topicController.createTopic);
router.get("/:goalId", auth, topicController.getTopics);

module.exports = router;
