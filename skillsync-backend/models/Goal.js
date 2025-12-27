const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  category: {
    type: String,
    enum: ["Academic", "Tech", "General"],
    required: true
  },

  duration: {
    type: Number, // in days
    required: true
  },

  startDate: {
    type: Date,
    default: Date.now
  },

  progress: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Goal", goalSchema);
