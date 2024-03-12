const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://teamwork3:1965eld@cluster0.ppzbp33.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  createIndexes: true, // Replace useCreateIndex with createIndexes
});
const db = mongoose.connection;
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit the process if unable to connect to MongoDB
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create Express App
const app = express();

// Middleware
app.use(express.json());

// Define Routes
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
