const Task = require("../models/tasks");

const getAllTasks = (req, res) => {
  res.send("get all tasks");
  res.sendStatus(200);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
  res.sendStatus(200);
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = (req, res) => {
  res.send("task updated");
  res.sendStatus(200);
};
const deleteTask = (req, res) => {
  res.send("task deleted");
  res.sendStatus(200);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
