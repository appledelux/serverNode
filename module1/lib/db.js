'use strict'

const Sequelize = require('sequelize')

let sequelize = null

module.exports = function setupDatabase (config) {
  // IMPLEMENT PATRON SINGLETON
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }

  return sequelize
}
