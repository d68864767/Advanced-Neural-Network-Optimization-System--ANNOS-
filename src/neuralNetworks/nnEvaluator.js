```javascript
// src/neuralNetworks/nnEvaluator.js

const tf = require('@tensorflow/tfjs');
const Logger = require('../utils/logger');

class NNEvaluator {
    constructor(model) {
        this.model = model;
    }

    // Evaluate the model using test data
    async evaluate(testData, testLabels) {
        try {
            const evaluation = await this.model.evaluate(testData, testLabels);
            const loss = evaluation[0].dataSync()[0];
            const accuracy = evaluation[1].dataSync()[0];

            Logger.info(`Model Evaluation - Loss: ${loss}, Accuracy: ${accuracy}`);

            return { loss, accuracy };
        } catch (error) {
            Logger.error(`Error during model evaluation: ${error.message}`);
            throw error;
        }
    }

    // Predict the output for a given input
    predict(inputData) {
        try {
            const prediction = this.model.predict(inputData);
            return prediction;
        } catch (error) {
            Logger.error(`Error during prediction: ${error.message}`);
            throw error;
        }
    }
}

module.exports = NNEvaluator;
```
