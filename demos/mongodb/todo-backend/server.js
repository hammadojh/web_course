const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-app')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/todos', require('./routes/todos'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 