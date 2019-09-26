const Sequelize = require('sequelize');

const sequelize = new Sequelize('taskmanagerDB', 'user', 'pass', {
    host: 'localhost',
    dialect: 'postgres',
    port: "5440"
})




module.exports = sequelize;