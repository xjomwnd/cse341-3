const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/*.js']; // Array of route files or directories

const doc = {
  info: {
    title: 'Your API Title',
    description: 'Description of your API',
    version: '1.0.0',
  },
  host: 'localhost:3000', // Your host
  basePath: '/', // Base path for your API
  schemes: ['http'], // Protocol (http, https, etc.)
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger documentation generated successfully');
});
