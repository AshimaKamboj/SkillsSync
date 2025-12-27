const User = require("../models/User");

function checkBadges(user) {
  const badges = [];

  if (user.level >= 2) badges.push("Rising Star");
  if (user.level >= 5) badges.push("Consistency Champ");
  if (user.streak >= 7) badges.push("7-Day Streak");
  if (user.xp >= 500) badges.push("XP Grinder");

  user.badges = [...new Set([...user.badges, ...badges])];
}

module.exports = checkBadges;
