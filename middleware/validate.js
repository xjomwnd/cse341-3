// validate.js

// Middleware function to validate incoming requests
function validateRequest(req, res, next) {
    const { body } = req;
  
    // Example validation rule: Check if the 'name' field is provided and is not empty
    if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
      return res.status(400).json({ error: 'Invalid or missing name field' });
    }
  
    // Add more validation rules as needed for other fields
  
    // If validation passes, call the next middleware
    next();
  }
  
  module.exports = validateRequest;
  