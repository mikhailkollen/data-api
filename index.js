const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const Tasks = sequelize.define("task", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const app = express();
app.use(express.json());

const tasks = [];

app.get("/tasks", async (req, res) => {
  const tasks = await Tasks.findAll();
  res.status(200).send(tasks);
  return;
});

app.post("/tasks", async (req, res) => {
  let data = req.body;
  const task = await Tasks.create(data);
  res.status(200).send(data);
  return;
});

app.listen({ port: 8080 }, () => {
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
    sequelize.sync({ alter: true });
    console.log("Synched");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log("Server is running on port 8080");
});

module.exports = app;
