```javascript
// src/optimizationAlgorithms/geneticAlgorithm.js

const tf = require('@tensorflow/tfjs');
const Logger = require('../utils/logger');
const algorithmConfig = require('../config/algorithmConfig');

class GeneticAlgorithm {
    constructor(population, fitnessFunction) {
        this.population = population;
        this.fitnessFunction = fitnessFunction;
        this.populationSize = algorithmConfig.geneticAlgorithm.populationSize;
        this.mutationRate = algorithmConfig.geneticAlgorithm.mutationRate;
        this.crossoverRate = algorithmConfig.geneticAlgorithm.crossoverRate;
    }

    // Function to perform selection
    selection() {
        // Sort the population in descending order based on fitness score
        this.population.sort((a, b) => this.fitnessFunction(b) - this.fitnessFunction(a));
        // Select the top individuals
        this.population = this.population.slice(0, this.populationSize);
    }

    // Function to perform crossover
    crossover(parent1, parent2) {
        // Create a new child by performing a weighted average of the parent's weights
        const child = parent1.clone();
        const parent2Weights = parent2.getWeights();

        childWeights = child.getWeights().map((weights, i) => {
            return weights.mul(tf.scalar(this.crossoverRate)).add(parent2Weights[i].mul(tf.scalar(1 - this.crossoverRate)));
        });

        child.setWeights(childWeights);
        return child;
    }

    // Function to perform mutation
    mutation(individual) {
        const mutatedWeights = individual.getWeights().map(weights => {
            const mask = tf.randomUniform(weights.shape).less(this.mutationRate);
            const randomValues = tf.randomNormal(weights.shape);
            return weights.add(mask.mul(randomValues));
        });

        individual.setWeights(mutatedWeights);
    }

    // Function to create new population
    generateNewPopulation() {
        for (let i = this.population.length; i < this.populationSize; i++) {
            let parent1 = this.population[Math.floor(Math.random() * this.population.length)];
            let parent2 = this.population[Math.floor(Math.random() * this.population.length)];
            let child = this.crossover(parent1, parent2);
            this.mutation(child);
            this.population.push(child);
        }
    }

    // Function to run the genetic algorithm
    run(iterations) {
        for (let i = 0; i < iterations; i++) {
            this.selection();
            this.generateNewPopulation();
            Logger.info(`Iteration ${i + 1} / ${iterations} completed`);
        }

        // Return the best individual from the population
        return this.population[0];
    }
}

module.exports = GeneticAlgorithm;
```
