const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');


const Prepaga = sequelize.define('prepagas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
});
  
module.exports = Prepaga;