const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getStats,
  getLeaderboard
} = require("../controllers/gamificationController");

router.get("/stats", auth, getStats);
router.get("/leaderboard", auth, getLeaderboard);

module.exports = router;
