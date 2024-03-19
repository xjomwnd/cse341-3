const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // You can add more fields as needed
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
