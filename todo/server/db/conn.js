const mysql = require("mysql2");
const { Sequelize } = require('sequelize');

 

// Option 3: Passing parameters separately (other dialects)
const conn = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql',
    dialectOptions: {
        user:'root',
        host:'localhost',
        password:'',
        database:'todo_list',
      }
   });

let connect = (async()=>{
    try {
        await conn.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})

connect()

const db = {};

db.Sequelize = Sequelize;
db.sequelize = conn;

db.tutorials = require("../models/productModel")(conn, Sequelize);


module.exports = conn;