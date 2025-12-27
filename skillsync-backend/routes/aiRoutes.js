const express = require("express");
const router = express.Router();
const aiController = require("../controllers/aiController");

router.post("/study-plan", aiController.getStudyPlan);

module.exports = router;
