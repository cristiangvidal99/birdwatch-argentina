"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = __importDefault(require("./config/env"));
const connection_1 = require("./db/connection");
require("./models");
const port = normalizePort(env_1.default.port);
app_1.default.set('port', port);
async function startServer() {
    try {
        await (0, connection_1.testConnection)();
        await (0, connection_1.syncDatabase)();
    }
    catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('No se pudo conectar a MySQL:', message);
        console.error('Verifica las variables DB_* en tu archivo .env');
        process.exit(1);
    }
    const server = app_1.default.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
    server.on('error', onError);
}
function normalizePort(value) {
    const parsedPort = Number.parseInt(String(value), 10);
    if (Number.isNaN(parsedPort)) {
        return value;
    }
    if (parsedPort >= 0) {
        return parsedPort;
    }
    return false;
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requiere privilegios elevados`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} ya esta en uso`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
startServer();
//# sourceMappingURL=server.js.map