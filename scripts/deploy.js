// scripts/deploy.js

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const serverConfig = require('../src/config/serverConfig');

console.log('Deploying ANNOS...');

// Check if .env file exists
if (!fs.existsSync(path.join(__dirname, '../.env'))) {
  console.error('Error: .env file not found. Please ensure it exists in the root directory.');
  process.exit(1);
}

// Check if node_modules directory exists
if (!fs.existsSync(path.join(__dirname, '../node_modules'))) {
  console.error('Error: node_modules directory not found. Please run npm install before deploying.');
  process.exit(1);
}

// Start the server
console.log(`Starting the server on port ${serverConfig.port}...`);
exec('npm start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting the server: ${error}`);
    process.exit(1);
  }

  console.log(stdout);
  console.error(stderr);
});
