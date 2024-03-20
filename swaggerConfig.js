const swaggerJsdoc = require('swagger-jsdoc');

// Swagger options
const options = {
  swaggerDefinition: {
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your application',
    },
    securityDefinitions: {
      // Define security scheme for OAuth2
      OAuth2: {
        type: 'oauth2',
        authorizationUrl: 'https://your-auth-provider.com/oauth2/authorize',
        flow: 'implicit',
        scopes: {
          // Define scopes if required
          read: 'Grants read access',
          write: 'Grants write access',
        },
      },
    },
    security: [{ OAuth2: [] }], // Mark all paths as secured by default
  },
  apis: ['./routes/*.js'], // Path to the API routes files
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
