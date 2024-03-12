class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  exports.handleErrors = (err, req, res, next) => {
    if (err instanceof ValidationError) {
      return res.status(400).json({ error: err.message });
    }
    // Handle other types of errors
    res.status(500).json({ error: 'Internal Server Error' });
  };