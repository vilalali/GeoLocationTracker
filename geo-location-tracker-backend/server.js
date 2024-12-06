// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db'); // Import the sequelize connection
const registerUserRoutes = require('./routes/registerUserRoutes');
const loginRoutes = require('./routes/loginUserRoutes');
const locationRoutes = require('./routes/locationRoutes');

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
app.use('/api/register', registerUserRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/locations', locationRoutes);


// Start Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on || 'localhost:${PORT}`);
});
