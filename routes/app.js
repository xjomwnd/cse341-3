const express = require('express');
const contactsRouter = require('./path/to/your/router');

const app = express();

// Mount the contacts router
app.use('/contacts', contactsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
