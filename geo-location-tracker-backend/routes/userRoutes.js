// routes/user.js
const express = require('express');
const bcrypt = require('bcrypt'); // For password hashing
const router = express.Router();
const User = require('../models/user');

// Register User
router.post('/register', async (req, res) => {
    try {
        const { username, vehicleId, vehicleType, password } = req.body;

        if (!username || !vehicleId || !vehicleType || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Use Sequelize's .create() to insert the user into the database
        const user = await User.create({
            username,
            vehicleId,
            vehicleType,
            password: hashedPassword,
        });

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Login User
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Find the user by username
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', vehicleId: user.vehicleId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
