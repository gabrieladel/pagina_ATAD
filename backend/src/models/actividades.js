const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');
const Usuario = require('./usuarios');


const Actividad = sequelize.define('actividades', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },

  id_usuario: {  
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,  
      key: 'id'        
    },
  }
},
{
  timestamps: false, 
  tableName: 'actividades'
});

Actividad.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'usuario' });
module.exports = Actividad;
