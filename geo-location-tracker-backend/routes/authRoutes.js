const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Assuming you have a User model
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating JWT tokens

// Login endpoint
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ error: 'Email and password are required' });
    }

    try {
        // Find the user by email (or any other unique identifier)
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).send({ error: 'Incorrect password' });
        }

        // After successful login, fetch the vehicleId
        const vehicleId = user.vehicleId; // Assuming you have a field 'vehicleId'

        // Generate JWT token
        const token = jwt.sign({ userId: user.id, vehicleId }, 'your-secret-key', { expiresIn: '1h' });

        // Respond with success, including the vehicleId and token
        res.status(200).send({
            message: 'Login successful',
            token, // Send the JWT token
            vehicleId // Send the vehicleId
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).send({ error: 'Internal server error' });
    }
});

module.exports = router;
