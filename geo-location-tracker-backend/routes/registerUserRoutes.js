// routes/user.js
const express = require('express');
const bcrypt = require('bcrypt'); // For password hashing
const router = express.Router();
const User = require('../models/user');

// Register User
router.post('/user-signup', async (req, res) => {
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



module.exports = router;
