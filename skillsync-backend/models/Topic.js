const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  goalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Goal",
    required: true
  },

  title: {
    type: String,
    required: true
  },

  completed: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Topic", topicSchema);
