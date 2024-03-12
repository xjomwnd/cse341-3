const express = require('express');
const app = express();

// Import routes
const contactsRouter = require('./routes/contacts');

// Middleware
app.use(express.json());

// Use routes
app.use('/contacts', contactsRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
