const getAllTasks = (req, res) => {
  res.send("get all tasks");
  res.sendStatus(200);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
  res.sendStatus(200);
};
const createTask = (req, res) => {
  res.json(req.body);
  res.sendStatus(201);
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
