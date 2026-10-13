import 'dotenv/config';
interface Environment {
    port: string | number;
    nodeEnv: string;
    db: {
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
}
declare const env: Environment;
export default env;
//# sourceMappingURL=env.d.ts.map