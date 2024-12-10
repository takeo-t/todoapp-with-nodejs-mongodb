const { get } = require("../routes/tasks");

const getAllTasks = (req, res) => {
  res.send("タスクをすべて取得しました");
};

const createTask = (req, res) => {
  res.send("タスクを新規作成しました");
};

const getSingleTask = (req, res) => {
  res.send("ある特定のタスクを取得しました");
};

const updateTask = (req, res) => {
  res.send("ある特定のタスクを更新しました");
};

const deleteTask = (req, res) => {
  res.send("ある特定のタスクを削除しました");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
