const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db.config");

const Contacto = sequelize.define(
  "Contacto",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    mensaje: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "contactos",
    timestamps: false, 
  }
);

module.exports = Contacto;
