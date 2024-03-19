// Import the validation middleware
const validateRequest = require('./middleware/validate');

// Example route using the validation middleware
app.post('/example-route', validateRequest, (req, res) => {
  // If the request passes validation, you can proceed with your route logic here
  // The request body can be accessed as req.body
  const name = req.body.name;
  res.json({ message: 'Request validated successfully', name: name });
});
