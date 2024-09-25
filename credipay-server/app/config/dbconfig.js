const Sequelize = require('sequelize')
const InitModel = require("../models/init-models");
const config=require('../config/config');


const sequelize = new Sequelize(
 config.database.dbName,
 config.database.dbuser,
 config.database.dbPass,
 {
   dialect: "mysql",
   host: config.database.dbHost,
   port: config.database.dbPort,
   logging: true,
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