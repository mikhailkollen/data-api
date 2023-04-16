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
  res.send({ title: "Books" });
});

app.get("/tasks", async (req, res) => {
  try {
    await Task.insertMany([
      {
        title: "Task 1",
        isCompleted: false,
        tag: "other",
        date: Date.now(),
      },
      {
        title: "Task 2",
        isCompleted: false,
        tag: "other",
        date: Date.now(),
      },
    ]);
    res.send({ title: "Tasks" });
  } catch (err) {
    console.error(err.message);
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
