const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');
const auth = require('../middleware/auth');

// Protect all routes
router.use(auth);

// Get all todos
router.get('/', todoController.getAllTodos);

// Create a todo
router.post('/', todoController.createTodo);

// Update a todo
router.patch('/:id', todoController.updateTodo);

// Delete a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router; 