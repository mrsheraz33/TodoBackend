const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

// GET all todos
router.get('/', getAllTodos);

// GET single todo
router.get('/:id', getTodoById);

// POST create todo
router.post('/', createTodo);

// PUT update todo
router.put('/:id', updateTodo);

// DELETE delete todo
router.delete('/:id', deleteTodo);

module.exports = router;