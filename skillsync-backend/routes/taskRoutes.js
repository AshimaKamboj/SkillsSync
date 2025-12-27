const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createTask,
  getTasks,
  completeTask
} = require("../controllers/taskController");

router.post("/", auth, createTask);
router.get("/:topicId", auth, getTasks);
router.put("/complete/:taskId", auth, completeTask);

module.exports = router;
