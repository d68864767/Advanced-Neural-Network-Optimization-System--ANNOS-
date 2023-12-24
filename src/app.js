```javascript
// src/app.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverConfig = require('./config/serverConfig');
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');

// Import routes
// const optimizationRoutes = require('./api/routes/optimizationRoutes');
// const nnRoutes = require('./api/routes/nnRoutes');

// Initialize Express app
const app = express();

// Use middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
// app.use('/api/optimization', optimizationRoutes);
// app.use('/api/nn', nnRoutes);

// Use error handler
app.use(errorHandler);

// Start server
app.listen(serverConfig.port, () => {
    logger.info(`Server is running on port ${serverConfig.port}`);
});

module.exports = app;
```
