const express = require('express');
const router = express.Router();
const { createQuiz, getQuizzes, getQuiz } = require('./db');

router.post('/create', async (req, res) => {
    const quiz = req.body;
    try {
        await createQuiz(quiz);
        res.status(201).send('Quiz created successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const quizzes = await getQuizzes();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const quiz = await getQuiz(id);
        res.status(200).json(quiz);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;