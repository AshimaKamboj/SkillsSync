const Topic = require("../models/Topic");

exports.createTopic = async (req, res) => {
  try {
    const { title, goalId } = req.body;

    const topic = await Topic.create({ title, goalId });

    res.status(201).json(topic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find({ goalId: req.params.goalId });
    res.json(topics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
