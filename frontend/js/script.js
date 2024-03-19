// Function to handle the login button click event
function handleLogin() {
    // Redirect the user to the OAuth2 authorization URL
    window.location.href = 'https://your-auth-server.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=openid profile email';
  }
  
  // Add event listener to the login button
  document.getElementById('loginBtn').addEventListener('click', handleLogin);
  
  // Check if there is an authorization code in the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  
  if (code) {
    // Send the authorization code to your backend for token exchange
    fetch('https://your-backend.com/token-exchange', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: code })
    })
    .then(response => response.json())
    .then(data => {
      // Assuming the backend responds with an access token
      const accessToken = data.access_token;
  
      // Use the access token to make authenticated requests to your backend API
      // Example:
      fetch('https://your-backend-api.com/protected-route', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Authenticated Request Response:', data);
        // Handle response data here
      })
      .catch(error => {
        console.error('Error making authenticated request:', error);
      });
    })
    .catch(error => {
      console.error('Error exchanging authorization code for token:', error);
    });
  }
  