const axios = require('axios');

// Base URL for your API
const baseURL = 'https://api.example.com';

// Function to test GET endpoint
async function testGetEndpoint() {
  try {
    const response = await axios.get(`${baseURL}/api/users`);
    console.log('GET /api/users response:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error testing GET /api/users:', error.response.data);
    } else if (error.request) {
      console.error('No response received for GET /api/users');
    } else {
      console.error('Error setting up GET /api/users request:', error.message);
    }
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
    if (error.response) {
      console.error('Error testing POST /api/users:', error.response.data);
    } else if (error.request) {
      console.error('No response received for POST /api/users');
    } else {
      console.error('Error setting up POST /api/users request:', error.message);
    }
  }
}

// Function to test PUT endpoint
async function testPutEndpoint() {
  const userId = '1234'; // Move the userId declaration outside the try block
  try {
    const payload = {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    };
    const response = await axios.put(`${baseURL}/api/users/${userId}`, payload);
    console.log(`PUT /api/users/${userId} response:`, response.data);
  } catch (error) {
    if (error.response) {
      console.error(`Error testing PUT /api/users/${userId}:`, error.response.data);
    } else if (error.request) {
      console.error(`No response received for PUT /api/users/${userId}`);
    } else {
      console.error(`Error setting up PUT /api/users/${userId} request:`, error.message);
    }
  }
}

// Function to test DELETE endpoint
async function testDeleteEndpoint() {
  const userId = '5678'; // Move the userId declaration outside the try block
  try {
    const response = await axios.delete(`${baseURL}/api/users/${userId}`);
    console.log(`DELETE /api/users/${userId} response:`, response.data);
  } catch (error) {
    if (error.response) {
      console.error(`Error testing DELETE /api/users/${userId}:`, error.response.data);
    } else if (error.request) {
      console.error(`No response received for DELETE /api/users/${userId}`);
    } else {
      console.error(`Error setting up DELETE /api/users/${userId} request:`, error.message);
    }
  }
}

// Call the testing functions
testGetEndpoint();
testPostEndpoint();
testPutEndpoint();
testDeleteEndpoint();