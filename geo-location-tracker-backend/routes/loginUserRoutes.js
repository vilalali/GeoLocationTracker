// routes/user.js
const express = require('express');
const bcrypt = require('bcrypt'); // For password hashing
const router = express.Router();
const User = require('../models/user');

// Login User
router.post('/user-login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Find the user by username and ensure to get all necessary fields
        const user = await User.findOne({
            where: { username }, 
            attributes: ['username', 'vehicleId', 'vehicleType', 'password']  // Explicitly get these fields
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Return the full user details with the required response
        res.status(200).json({
            message: 'Login successful',
            username: user.username,
            vehicleId: user.vehicleId,
            vehicleType: user.vehicleType
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;