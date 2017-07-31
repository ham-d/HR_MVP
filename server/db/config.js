var Sequelize = require('sequelize');
require('dotenv').config();
require('dotenv').load();

var db = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  pool: {
    max: 3,
    min: 0,
    idle: 1000
  }
});

db.authenticate()
  .then(() => {
    console.log('db is now connected');
  })
  .catch((err) => {
    console.log('error in connecting to db', err);
  })

module.exports = db;