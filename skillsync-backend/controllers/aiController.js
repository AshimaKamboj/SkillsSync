const model = require("../config/gemini");
const Goal = require("../models/Goal");

exports.generatePlan = async (req, res) => {
  try {
    const { goalId } = req.body;

    const goal = await Goal.findById(goalId);
    if (!goal) return res.status(404).json({ message: "Goal not found" });

    const prompt = `
You are a smart AI learning coach.

User goal:
Title: ${goal.title}
Description: ${goal.description}
Duration: ${goal.duration} days

Create a clear day-wise learning plan.
Give exactly ${goal.duration} daily tasks.
Each task should be short and actionable.
`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    res.json({ plan: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
