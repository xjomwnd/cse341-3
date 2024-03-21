const fs = require('fs');

// Read the Netlify configuration file
const configFile = 'netlify.toml'; // or 'netlify.yml'
const configContent = fs.readFileSync(configFile, 'utf8');

// Modify build settings
let updatedConfigContent = configContent.replace(/(base\s*=\s*")[^"]+"/, '$1path/to/correct/directory"');

// Write changes back to the file
fs.writeFileSync(configFile, updatedConfigContent);

// Commit and push changes (use your Git commands here)

// Trigger a new build on Netlify (manually or via API)
