const Topic = require("../models/Topic");

exports.createTopic = async (req, res) => {
  try {
    const topic = await Topic.create({
      goalId: req.body.goalId,
      title: req.body.title,
      userId: req.user.id
    });
    res.json(topic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTopicsByGoal = async (req, res) => {
  try {
    const topics = await Topic.find({ goalId: req.params.goalId });
    res.json(topics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTopic = async (req, res) => {
  try {
    const { progress } = req.body;

    const topic = await Topic.findById(req.params.id);
    if (!topic) return res.status(404).json({ message: "Topic not found" });

    if (progress !== undefined) {
      topic.progress = progress;
    }

    await topic.save();
    res.json(topic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
