const express = require('express');
const Quiz = require('../models/Quiz');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, async (req, res) => {
  try {
    const { question, options, correctAnswer } = req.body;
    const quiz = new Quiz({ question, options, correctAnswer });
    await quiz.save();
    res.status(201).json({ message: 'Quiz created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
