// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db'); // Import the sequelize connection
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes');
const loginRoutes = require('./routes/authRoutes');
const User = require('./models/user');
const LocationHistory = require('./models/location');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
connectDB();

// Sync Sequelize models with the database
sequelize.sync({ alter: true })
  .then(() => console.log("Database synced successfully"))
  .catch(err => console.error("Error syncing database:", err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/login', loginRoutes);

// Start Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://10.1.42.130:${PORT}`);
});
