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
    default: "2023-04-16T00:00:00.000Z",
  },
});

module.exports = mongoose.model("Task", TaskSchema);
