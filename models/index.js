'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config'))[env]; // Adjust the path to your config file if necessary
const db = {};

let sequelize;

if (config.use_env_variable) {
  // Using environment variable for database URL
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // Using explicit database credentials from the config
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Dynamically import all models from the current directory
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && // Exclude hidden files
      file !== basename && // Exclude this file (index.js)
      file.slice(-3) === '.js' // Include only .js files
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes); // Import the model
    db[model.name] = model; // Add the model to the `db` object
  });

// Run `associate` method for models with associations defined
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Export the database connection and all models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
