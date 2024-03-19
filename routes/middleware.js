// Import the authentication middleware
const authenticateToken = require('./middleware/authentication');

// Example protected route
app.get('/protected-route', authenticateToken, (req, res) => {
  // Access the authenticated user from req.user
  const user = req.user;
  res.json({ message: 'Authenticated route', user: user });
});
