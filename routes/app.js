const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/appDBex'


const app = express();

// Import the contacts controller
const contactsController = require('./routes/contact'); // Adjusted the file name here

// Middleware
app.use(express.json());

// Use the contacts controller
app.use('/contacts', contactsController);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
