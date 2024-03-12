const express = require('express');
const router = express.Router();
const { validateUser } = require('../utils/validation');
const { handleErrors, ValidationError } = require('../utils/errorHandling');

// Route handler with validation and error handling
router.post('/users', validateUser, async (req, res, next) => {
  try {
    // Create a new user
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
router.use(handleErrors);

module.exports = router;