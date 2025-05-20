const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// MongoDB task model
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true }
});
const Task = mongoose.model('Task', taskSchema);

// GET /tasks - list all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// POST /tasks - add a new task
router.post('/', async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  try {
    const task = new Task({ title });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add task' });
  }
});

// DELETE /tasks/:id - delete a task
router.delete('/:id', async (req, res) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Task not found' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
