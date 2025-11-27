const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');

// Importar los modelos relacionados
const Nivel = require('./niveles');  
const Prepaga = require('./prepagas');

const Inscripcion = sequelize.define('inscripciones', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  domicilio: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  id_nivel: {  
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: NIvel,  
      key: 'id'        
    },
  },
  id_prepaga: {  
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Prepaga,  
      key: 'id'        
    },
  },
});

// Relaciones
Inscripcion.belongsTo(Nivel, { foreignKey: 'id_nivel', as: 'nivel' });
Inscripcion.belongsTo(Prepaga, { foreignKey: 'id_prepaga', as: 'prepaga' });

module.exports = Inscripcion;



						
