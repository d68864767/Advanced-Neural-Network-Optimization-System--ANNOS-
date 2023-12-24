```javascript
const Logger = require('./logger');

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    // Log the error details
    Logger.error(`Error: ${err.message}`);

    // Set HTTP status code
    const statusCode = err.statusCode || 500;

    // Send error response
    res.status(statusCode).json({
        status: 'error',
        statusCode: statusCode,
        message: err.message
    });
};

module.exports = errorHandler;
```
