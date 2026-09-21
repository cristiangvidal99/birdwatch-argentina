"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const env = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'express_db',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'change-me-in-production',
        expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    },
};
exports.default = env;
//# sourceMappingURL=env.js.map