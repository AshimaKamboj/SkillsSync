const Task = require("../models/Task");
const Topic = require("../models/Topic");
const Goal = require("../models/Goal");
const User = require("../models/User");
const checkBadges = require("./badgeController");

exports.createTask = async (req, res) => {
  try {
    const { title, topicId } = req.body;
    const task = await Task.create({ title, topicId });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ topicId: req.params.topicId.trim() });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId.trim());
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (task.status === "completed") {
      return res.json({ message: "Already completed" });
    }

    // Mark task complete
    task.status = "completed";
    await task.save();

    const user = await User.findById(req.user.id);

    // 🎯 Base XP
    let xpEarned = 10;

    // 🤖 AI difficulty bonus (0–20)
    const aiBonus = Math.floor(Math.random() * 21);
    xpEarned += aiBonus;

    // 🔥 Streak logic
    const today = new Date().toDateString();
    const last = user.lastActive ? new Date(user.lastActive).toDateString() : null;

    if (last === today) {
      // same day → no streak change
    } else if (
      new Date(user.lastActive).toDateString() ===
      new Date(Date.now() - 86400000).toDateString()
    ) {
      user.streak += 1;
      xpEarned += user.streak * 5; // streak bonus
    } else {
      user.streak = 1;
    }

    user.lastActive = new Date();

    // 💎 Add XP + Level
    user.xp += xpEarned;
    user.level = Math.floor(user.xp / 100) + 1;

    // 🏅 Check badges
    checkBadges(user);

    await user.save();

    // 📊 Update goal progress
    const topic = await Topic.findById(task.topicId);
    const goal = await Goal.findById(topic.goalId);

    const totalTasks = await Task.countDocuments({ topicId: topic._id });
    const completedTasks = await Task.countDocuments({
      topicId: topic._id,
      status: "completed"
    });

    goal.progress = Math.round((completedTasks / totalTasks) * 100);
    await goal.save();

    res.json({
      message: "Task completed",
      xpEarned,
      user: {
        xp: user.xp,
        level: user.level,
        streak: user.streak,
        badges: user.badges
      },
      goal
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
