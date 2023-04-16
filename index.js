const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
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

app.use(express.json());
app.use(cors({ origin: "https://mikhailkollen.github.io" }));

app.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.send(newTask);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
