const express = require("express");
const router = express.Router();
const gamificationController = require("../controllers/gamificationController");

router.get("/stats", gamificationController.getStats);

module.exports = router;
