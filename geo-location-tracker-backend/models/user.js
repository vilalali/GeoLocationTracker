const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Import sequelize instance

// Define the User model with explicit table name
const User = sequelize.define('User', {
  vehicleId: {
    type: DataTypes.STRING,
    primaryKey: true, // Set vehicleId as the primary key
    allowNull: false,
    unique: true,
  },
  vehicleType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Username must be unique but is not a primary key
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', // Explicit table name (singular or plural as per your preference)
  timestamps: true, // Enable createdAt and updatedAt fields automatically
});

// Export the model
module.exports = User;
