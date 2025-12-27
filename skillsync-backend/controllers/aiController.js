const client = require("../config/ai");
const Goal = require("../models/Goal");

exports.generatePlan = async (req, res) => {
  try {
    const goal = await Goal.findById(req.body.goalId);
    if (!goal) return res.status(404).json({ message: "Goal not found" });

    const prompt = `
Create a ${goal.duration}-day learning plan for:
${goal.title}

Description: ${goal.description}
Category: ${goal.category}

Give a day-wise plan.
`;

    const completion = await client.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful learning planner." },
        { role: "user", content: prompt }
      ]
    });

    res.json({
      plan: completion.choices[0].message.content
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
