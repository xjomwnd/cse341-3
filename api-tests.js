const axios = require('axios');

// Base URL for your API
const baseURL = 'https://api.example.com';

// Function to test GET endpoint
async function testGetEndpoint() {
  try {
    const response = await axios.get(`${baseURL}/api/users`);
    console.log('GET /api/users response:', response.data);
  } catch (error) {
    console.error('Error testing GET /api/users:', error.response.data);
  }
}

// Function to test POST endpoint
async function testPostEndpoint() {
  try {
    const payload = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    const response = await axios.post(`${baseURL}/api/users`, payload);
    console.log('POST /api/users response:', response.data);
  } catch (error) {
    console.error('Error testing POST /api/users:', error.response.data);
  }
}

// Function to test PUT endpoint
async function testPutEndpoint() {
  try {
    const userId = '1234';
    const payload = {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    };
    const response = await axios.put(`${baseURL}/api/users/${userId}`, payload);
    console.log(`PUT /api/users/${userId} response:`, response.data);
  } catch (error) {
    console.error(`Error testing PUT /api/users/${userId}:`, error.response.data);
  }
}

// Function to test DELETE endpoint
async function testDeleteEndpoint() {
  try {
    const userId = '5678';
    const response = await axios.delete(`${baseURL}/api/users/${userId}`);
    console.log(`DELETE /api/users/${userId} response:`, response.data);
  } catch (error) {
    console.error(`Error testing DELETE /api/users/${userId}:`, error.response.data);
  }
}

// Call the testing functions
testGetEndpoint();
testPostEndpoint();
testPutEndpoint();
testDeleteEndpoint();