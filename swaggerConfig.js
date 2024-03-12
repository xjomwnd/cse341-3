const swaggerJsdoc = require('swagger-jsdoc');

// Swagger options
const options = {
  swaggerDefinition: {
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your application',
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes files
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
