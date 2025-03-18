const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('./db');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        await registerUser(username, password);
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await loginUser(username, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).send('Invalid credentials');
    }
});

module.exports = router;