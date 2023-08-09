const Sequelize =  require('sequelize');

const sequelize = require('../utils/database');

const Expenses = sequelize.define(
    'Expenses', 
    {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        description:{
            type:Sequelize.STRING,
            allowNull:false
        },
        amount: {
            type:Sequelize.STRING,
            allowNull:false
        },
        category:{
            type:Sequelize.STRING,
            allowNull:false
        }

    }
);

module.exports = Expenses;