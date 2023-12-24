// src/config/serverConfig.js

// Load environment variables from .env file
require('dotenv').config();

const serverConfig = {
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
};

module.exports = serverConfig;
