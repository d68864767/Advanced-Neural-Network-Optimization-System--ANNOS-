// scripts/setup.js

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('Setting up ANNOS...');

// Check if .env file exists
if (!fs.existsSync(path.join(__dirname, '../.env'))) {
  console.error('Error: .env file not found. Please ensure it exists in the root directory.');
  process.exit(1);
}

// Install dependencies
console.log('Installing dependencies...');
exec('npm install', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error installing dependencies: ${error}`);
    process.exit(1);
  }
  console.log(stdout);
  console.error(stderr);

  // Run initial tests
  console.log('Running initial tests...');
  exec('npm test', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running tests: ${error}`);
      process.exit(1);
    }
    console.log(stdout);
    console.error(stderr);

    console.log('Setup complete. You can now start the application with "npm start".');
  });
});
