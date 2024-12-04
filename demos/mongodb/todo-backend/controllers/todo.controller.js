const Todo = require('../models/Todo');

// Get all todos
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a todo
exports.createTodo = async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a todo
exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (req.body.text != null) {
            todo.text = req.body.text;
        }
        if (req.body.completed != null) {
            todo.completed = req.body.completed;
        }
        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
