const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');


const Nivel = sequelize.define('niveles', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
});

module.exports = Nivel;