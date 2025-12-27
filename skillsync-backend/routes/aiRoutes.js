const express = require("express");
const router = express.Router();
const { generatePlan } = require("../controllers/aiController");
const auth = require("../middleware/authMiddleware");

router.post("/generate-plan", auth, generatePlan);

module.exports = router;
