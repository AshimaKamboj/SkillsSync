const Goal = require("../models/Goal");

exports.createGoal = async (req, res) => {
  try {
    const { title, description, category, duration } = req.body;

    const goal = await Goal.create({
      userId: req.user.id,
      title,
      description,
      category,
      duration
    });

    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
