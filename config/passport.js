const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: 'your_client_id',
    clientSecret: 'your_client_secret',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // Verify user and create or retrieve user in the database
    // Call done() with user object
  }
));

module.exports = passport;
