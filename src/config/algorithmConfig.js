// src/config/algorithmConfig.js

// Load environment variables from .env file
require('dotenv').config();

const algorithmConfig = {
  geneticAlgorithm: {
    populationSize: process.env.GA_POPULATION_SIZE || 100,
    mutationRate: process.env.GA_MUTATION_RATE || 0.01,
    crossoverRate: process.env.GA_CROSSOVER_RATE || 0.7,
  },
  reinforcementLearning: {
    learningRate: process.env.RL_LEARNING_RATE || 0.1,
    discountFactor: process.env.RL_DISCOUNT_FACTOR || 0.9,
    explorationRate: process.env.RL_EXPLORATION_RATE || 0.2,
  },
};

module.exports = algorithmConfig;
