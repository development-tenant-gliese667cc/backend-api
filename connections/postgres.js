const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dialect: 'postgres'
});

sequelize.authenticate()
    .catch(error => {
        throw error;
    });

module.exports = sequelize;
