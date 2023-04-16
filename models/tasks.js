const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: "other",
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
