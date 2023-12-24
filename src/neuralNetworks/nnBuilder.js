```javascript
// src/neuralNetworks/nnBuilder.js

const tf = require('@tensorflow/tfjs');
const Logger = require('../utils/logger');
const algorithmConfig = require('../config/algorithmConfig');

class NeuralNetworkBuilder {
    constructor() {
        this.layersConfig = [];
    }

    addLayer(layerConfig) {
        this.layersConfig.push(layerConfig);
    }

    build() {
        const model = tf.sequential();

        this.layersConfig.forEach((layerConfig, index) => {
            const layer = tf.layers.dense(layerConfig);
            model.add(layer);
            Logger.info(`Layer ${index + 1} added to the neural network`);
        });

        const compileConfig = {
            optimizer: tf.train.adam(algorithmConfig.reinforcementLearning.learningRate),
            loss: 'meanSquaredError'
        };

        model.compile(compileConfig);
        Logger.info('Neural network compiled successfully');

        return model;
    }
}

module.exports = NeuralNetworkBuilder;
```
