const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Register = sequelize.define("register", {
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

});

module.exports = Register;