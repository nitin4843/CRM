const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'crm',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
