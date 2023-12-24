```javascript
// src/api/controllers/nnController.js

// Import required modules
const express = require('express');
const router = express.Router();
const NNBuilder = require('../../neuralNetworks/nnBuilder');
const NNEvaluator = require('../../neuralNetworks/nnEvaluator');
const logger = require('../../utils/logger');

// Initialize neural network builder and evaluator
const nnBuilder = new NNBuilder();
const nnEvaluator = new NNEvaluator();

// Route to create a new neural network
router.post('/create', (req, res, next) => {
    try {
        const { networkConfig } = req.body;

        // Check if the network configuration is provided
        if (!networkConfig) {
            throw new Error('Network configuration must be provided');
        }

        // Create a new neural network
        const neuralNetwork = nnBuilder.create(networkConfig);

        // Log the creation of the new neural network
        logger.info(`Created a new neural network with ID: ${neuralNetwork.id}`);

        // Send the created neural network as response
        res.status(200).json({
            status: 'success',
            data: neuralNetwork
        });
    } catch (error) {
        next(error);
    }
});

// Route to evaluate a neural network
router.post('/evaluate', (req, res, next) => {
    try {
        const { neuralNetwork, dataset } = req.body;

        // Check if the neural network and dataset are provided
        if (!neuralNetwork || !dataset) {
            throw new Error('Neural network and dataset must be provided');
        }

        // Evaluate the neural network
        const evaluationResult = nnEvaluator.evaluate(neuralNetwork, dataset);

        // Log the evaluation result
        logger.info(`Evaluated neural network with ID: ${neuralNetwork.id}. Result: ${evaluationResult}`);

        // Send the evaluation result as response
        res.status(200).json({
            status: 'success',
            data: evaluationResult
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
```
