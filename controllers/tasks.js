const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("タスクをすべて取得しました");
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(201).json({ createTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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