const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");

router.post("/", auth, taskController.createTask);
router.get("/:topicId", auth, taskController.getTasks);
router.put("/complete/:taskId", auth, taskController.completeTask);

module.exports = router;
