// authentication.js

const jwt = require('jsonwebtoken');
const { secretKey } = require('../config'); // Import your secret key from config file

// Middleware function to authenticate requests
function authenticateToken(req, res, next) {
  // Get the token from the request headers
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // If token is null, return 401 Unauthorized
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      console.error('Token verification error:', err);
      return res.status(403).json({ error: 'Forbidden' });
    }

    // If verification is successful, set the user on the request object
    req.user = user;
    next(); // Call the next middleware
  });
}

module.exports = authenticateToken;
