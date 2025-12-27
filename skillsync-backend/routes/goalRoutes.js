const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createGoal, getGoals } = require("../controllers/goalController");

router.post("/", auth, createGoal);
router.get("/", auth, getGoals);

module.exports = router;
