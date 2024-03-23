const express = require('express');
const app = express();
const contactsRouter = require('./routes/contacts');

// Mount the contacts router
app.use('/api/contacts', contactsRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});