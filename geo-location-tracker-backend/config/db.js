require('dotenv').config(); // Import dotenv to access environment variables
const { Sequelize } = require('sequelize');

// Create a Sequelize instance and connect to the MySQL database
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || 'gltdb', // Database name
  process.env.MYSQL_USER || 'dfs', // Database username
  process.env.MYSQL_PASSWORD || 'password', // Database password
  {
    host: process.env.MYSQL_HOST || '10.1.42.130',
    dialect: 'mysql', // Database dialect
    logging: false, // Disable logging of SQL queries (optional)
  }
);

// Function to test the database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connected successfully with Sequelize');
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    process.exit(1); // Exit if connection fails
  }
};

module.exports = { sequelize, connectDB };
