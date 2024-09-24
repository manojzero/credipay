const Sequelize = require('sequelize')
const InitModel = require("../models/init-models");
const dotenv = require("dotenv");
dotenv.config();
const DB_NAME= process.env.DB_NAME;
const DB_USER= process.env.DB_USER;
const DB_PASSWORD= process.env.DB_PASSWORD;
const DB_HOST= process.env.DB_HOST;
const sequelize = new Sequelize(
 DB_NAME,
 DB_USER,
 DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'mysql'
  }
);
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
module.exports = InitModel(sequelize);

// const Sequelize = require("sequelize");


// const InitModel = require("../models/init-models");

// module.exports = async () => {
//   const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: process.env.DB_HOST,
//       dialect: 'mysql',
//       logging: true
//     }
//   );

//   const Models = InitModel(sequelize);

//   const connection = {};
//   if (connection.isConnected) {
//     console.log("Reusing connection")
//     return Models;
//   }
//   await sequelize.authenticate();
//   connection.isConnected = true;
//   console.log("=> Created a new connection.");
//   return Models;
// }