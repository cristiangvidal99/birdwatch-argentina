import { Sequelize } from 'sequelize';
declare const sequelize: Sequelize;
declare function testConnection(): Promise<void>;
declare function syncDatabase(): Promise<void>;
export { sequelize, testConnection, syncDatabase, };
//# sourceMappingURL=connection.d.ts.map