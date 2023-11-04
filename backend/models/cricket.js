const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cricket = sequelize.define('cricket',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,

  birth: Sequelize.STRING,

  url: Sequelize.STRING,

  birth_place: Sequelize.STRING,

  career: Sequelize.STRING,

  matches: Sequelize.INTEGER,

  score: Sequelize.INTEGER,

  fifties: Sequelize.INTEGER,

  centuries: Sequelize.INTEGER,

  wickets: Sequelize.INTEGER,

  avg: Sequelize.INTEGER,
});

module.exports = Cricket;