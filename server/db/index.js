var db = require('./config');
var Sequelize = require('sequelize');

var Show = db.define('show', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: true
  },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

//create table
Show.sync();

module.exports = {
  Show: Show
}