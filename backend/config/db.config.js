const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     
  process.env.DB_USER,     
  process.env.DB_PASS,     
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
  }
);


(async () => {
  try {
    await sequelize.authenticate();
    console.log(' Conexión exitosa a MySQL con Sequelize');
  } catch (error) {
    console.error(' Error al conectar con Sequelize:', error);
  }
})();

module.exports = sequelize;
