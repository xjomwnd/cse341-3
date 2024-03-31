const express = require('express');
const router = express.Router();

// Define a route with a callback function
router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
