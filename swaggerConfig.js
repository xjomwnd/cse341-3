const swaggerJsdoc = require('swagger-jsdoc');

// Swagger options
const options = {
  swaggerDefinition: {
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'This is the updated API description.', // Changed the API description
    },
    securityDefinitions: {
      // Define security scheme for API Key
      APIKey: {
        type: 'apiKey',
        in: 'header',
        name: 'X-API-Key',
      },
    },
    security: [{ APIKey: [] }], // Mark all paths as secured by default
  },
  apis: ['./routes/**/*.js'], // Updated path to include nested route files
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;