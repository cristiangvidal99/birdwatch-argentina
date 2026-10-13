import { Sequelize } from 'sequelize';
import env from '../config/env';

const sequelize = new Sequelize(
  env.db.database,
  env.db.user,
  env.db.password,
  {
    host: env.db.host,
    port: env.db.port,
    dialect: 'mysql',
    logging: env.nodeEnv === 'development' ? console.log : false,
  }
);

async function testConnection() {
  await sequelize.authenticate();
  console.log('Conexion MySQL establecida correctamente');
}

async function syncDatabase() {
  await sequelize.sync();
  console.log('Modelos sincronizados con la base de datos');
}

export {
  sequelize,
  testConnection,
  syncDatabase,
};
