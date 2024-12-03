const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Import sequelize instance
const User = require('./user'); // Import User model

// Define the LocationHistory model with explicit table name
const LocationHistory = sequelize.define('LocationHistory', {
    vehicleId: {
        type: DataTypes.STRING, // Match vehicleId to the primary key type in User model
        allowNull: false,
        references: {
            model: 'users', // The table name in the database
            key: 'vehicleId', // Foreign key references 'vehicleId' in the User model
        },
        onDelete: 'CASCADE', // Delete location history if the associated user is deleted
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: -90,
            max: 90, // Valid latitude range
        },
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: -180,
            max: 180, // Valid longitude range
        },
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Automatically set the timestamp if not provided
    },
}, {
    tableName: 'location_histories', // Explicit table name
    timestamps: true, // Enable createdAt and updatedAt fields automatically
});

// Define association between LocationHistory and User
LocationHistory.belongsTo(User, {
    foreignKey: 'vehicleId', // Foreign key in LocationHistory references vehicleId in User
    targetKey: 'vehicleId', // Primary key in User model
    as: 'user', // Alias for the association
});

User.hasMany(LocationHistory, {
    foreignKey: 'vehicleId', // Foreign key in LocationHistory table
    sourceKey: 'vehicleId', // Primary key in User model
    as: 'locationHistories', // Alias for the reverse association
});

// Export the model
module.exports = LocationHistory;
