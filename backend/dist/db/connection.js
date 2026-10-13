"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
exports.testConnection = testConnection;
exports.syncDatabase = syncDatabase;
const sequelize_1 = require("sequelize");
const env_1 = __importDefault(require("../config/env"));
const sequelize = new sequelize_1.Sequelize(env_1.default.db.database, env_1.default.db.user, env_1.default.db.password, {
    host: env_1.default.db.host,
    port: env_1.default.db.port,
    dialect: 'mysql',
    logging: env_1.default.nodeEnv === 'development' ? console.log : false,
});
exports.sequelize = sequelize;
async function testConnection() {
    await sequelize.authenticate();
    console.log('Conexion MySQL establecida correctamente');
}
async function syncDatabase() {
    await sequelize.sync();
    console.log('Modelos sincronizados con la base de datos');
}
//# sourceMappingURL=connection.js.map