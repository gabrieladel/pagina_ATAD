const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = process.env.MYSQL_URL
  ? new Sequelize(process.env.MYSQL_URL, { dialect: 'mysql', logging: false })
  : new Sequelize(
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
    console.log('Conexión exitosa a MySQL con Sequelize');
  } catch (error) {
    console.error('Error al conectar con Sequelize:', error);
  }
  console.log("DB USADA:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  db: process.env.DB_NAME,
  port: process.env.DB_PORT
});

})();

module.exports = sequelize;
