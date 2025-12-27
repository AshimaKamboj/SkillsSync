const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic",
    required: true
  },

  title: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending"
  },

  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
