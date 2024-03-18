const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const googleStrategy = require('./auth/googleStrategy');

// Connect to MongoDB
mongoose.connect('mongodb+srv://teamwork3:1965eld@cluster0.ppzbp33.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Create Express App
const app = express();

// Middleware
app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(googleStrategy);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Define Routes
// Google OAuth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect or respond with user data
    res.redirect('/dashboard');
  }
);

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
