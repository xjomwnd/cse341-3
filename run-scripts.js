const fs = require('fs');

// Read and execute the update script
fs.readFile('update_netlify_config.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Execute the contents of the update script
  try {
    eval(data);
  } catch (error) {
    console.error('Error executing script:', error);
  }
});
