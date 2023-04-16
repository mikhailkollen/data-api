require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/tasks");

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  // show all tasks in the database
  Task.find({}, (err, tasks) => {
    if (err) {
      console.log(err);
    } else {
      res.send(tasks);
    }
  });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
