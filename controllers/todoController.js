const Todo = require('../models/Todo');

// @desc    Get all todos
// @route   GET /api/todos
exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single todo
// @route   GET /api/todos/:id
exports.getTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid todo ID format'
      });
    }
    next(error);
  }
};

// @desc    Create new todo
// @route   POST /api/todos
exports.createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    
    // Validation
    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title'
      });
    }
    
    const todo = await Todo.create({
      title,
      description: description || ''
    });
    
    res.status(201).json({
      success: true,
      data: todo
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    next(error);
  }
};

// @desc    Update todo
// @route   PUT /api/todos/:id
exports.updateTodo = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;
    
    // Find todo first
    let todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    // Update fields
    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true, runValidators: true }
    );
    
    res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid todo ID format'
      });
    }
    next(error);
  }
};

// @desc    Delete todo
// @route   DELETE /api/todos/:id
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    await Todo.findByIdAndDelete(req.params.id);
    
    res.status(200).json({
      success: true,
      message: 'Todo deleted successfully',
      data: {}
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid todo ID format'
      });
    }
    next(error);
  }
};