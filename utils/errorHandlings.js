// utils/errorHandling.js
class ValidationError extends Error {
  constructor(errors) {
    super('Validation Error');
    this.errors = errors;
  }
}

const handleErrors = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({ errors: err.errors });
  }

  // Handle other types of errors
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = { handleErrors, ValidationError };