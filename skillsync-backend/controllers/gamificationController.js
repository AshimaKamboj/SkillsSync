const User = require("../models/User");

exports.getStats = async (req, res) => {
  const user = await User.findById(req.user.id);

  res.json({
    xp: user.xp,
    level: user.level,
    streak: user.streak
  });
};

exports.getLeaderboard = async (req, res) => {
  const users = await User.find()
    .sort({ xp: -1 })
    .limit(10)
    .select("name xp level");

  res.json(users);
};
