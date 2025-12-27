const Task = require("../models/Task");
const Topic = require("../models/Topic");
const Goal = require("../models/Goal");
const User = require("../models/User");

exports.createTask = async (req, res) => {
  const { title, topicId } = req.body;
  const task = await Task.create({ title, topicId });
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ topicId: req.params.topicId });
  res.json(tasks);
};

exports.completeTask = async (req, res) => {
  const task = await Task.findById(req.params.taskId);
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.status = "completed";
  await task.save();

  // Give XP
  const user = await User.findById(req.user.id);
  user.xp += 10;

  // Level system
  user.level = Math.floor(user.xp / 100) + 1;

  // Streak system
  const today = new Date().toDateString();
  if (user.lastActive?.toDateString() === today) {
    // do nothing
  } else if (
    new Date(user.lastActive).toDateString() ===
    new Date(Date.now() - 86400000).toDateString()
  ) {
    user.streak += 1;
  } else {
    user.streak = 1;
  }

  user.lastActive = new Date();
  await user.save();

  // Update goal progress
  const topic = await Topic.findById(task.topicId);
  const goal = await Goal.findById(topic.goalId);

  const totalTopics = await Topic.countDocuments({ goalId: goal._id });
  const completedTopics = await Topic.countDocuments({
    goalId: goal._id,
    completed: true
  });

  const allTasks = await Task.find({ topicId: topic._id });
  const completedTasks = allTasks.filter(t => t.status === "completed").length;

  const progress =
    ((completedTopics + completedTasks) /
      (totalTopics + allTasks.length)) * 100;

  goal.progress = Math.min(progress, 100);
  await goal.save();

  res.json({ message: "Task completed", user, goal });
};
