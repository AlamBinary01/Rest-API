const DataTypes = require("sequelize");
const Sequelize = require("sequelize");
const sequelize= require('../database/databaseConnection');
const Logins = sequelize.define("Login", {
   username: {
     type: DataTypes.STRING,
     allowNull: false
   },
   password: {
     type: DataTypes.STRING,
     allowNull: false
   },
});

sequelize.sync().then(() => {
   console.log('Login table created successfully!');
//    // create data
//    Logins.create({
//      username:"20F-011",
//      password:"Musta Aqeel"
//   }).then(res => {
//       console.log(res)
//   }).catch((error) => {
//       console.error('Failed to create a new record : ', error);
//   });
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports=Logins