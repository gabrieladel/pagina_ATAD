require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: console.log,  // <-- ACTIVAR TEMPORALMENTE
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a MySQL en Railway");
  } catch (error) {
    console.error("Error al conectar a MySQL:", error);
  }
})();

module.exports = sequelize;

