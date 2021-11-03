'use strict'


const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL

const {Sequelize,DataTypes}= require('sequelize')

let sequelizeOption = process.env.NODE_ENV === 'production '? {
dialectOptions :{
    ssl :{
        require : true ,
        rejectUnauthorized : false,
    }
}
} :{}


 const people = require('./people.model')

let sequlize = new Sequelize(POSTGRES_URI,sequelizeOption)
module.exports = {
    db:sequlize,
    People : people(sequlize,DataTypes)
}