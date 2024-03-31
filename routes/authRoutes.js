const express = require('express');
const router = express.Router();

// Import any necessary middleware or authentication functions
const { authenticateUser, authorizeUser } = require('../middleware/auth');
const { loginUser, registerUser, logoutUser } = require('../controllers/authController');

// Define routes for authentication
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/logout', logoutUser);

module.exports = router;
