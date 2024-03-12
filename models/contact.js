const mongoose = require('mongoose');

// Define the schema for the Contact model
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  favoriteColor: {
    type: String
  },
  birthday: {
    type: Date
  }
});

// Create and export the Contact model
module.exports = mongoose.model('Contact', contactSchema);
