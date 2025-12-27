const Task = require("../models/Task");
const Topic = require("../models/Topic");
const Goal = require("../models/Goal");

exports.createTask = async (req, res) => {
  try {
    const { title, topicId } = req.body;

    const task = await Task.create({ title, topicId });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ topicId: req.params.topicId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark task completed + update XP & progress
exports.completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    task.status = "completed";
    await task.save();

    res.json({ message: "Task completed", task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
