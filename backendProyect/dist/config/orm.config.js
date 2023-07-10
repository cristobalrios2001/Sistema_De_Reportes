"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDS = exports.DataSourceConfig = void 0;
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../entitites/user.entity");
const typeorm_1 = require("typeorm");
config_1.ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
});
const DatabaseConfig = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE == "true",
    logging: process.env.TYPEORM_LOGGING == "true",
    entities: [user_entity_1.User],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
};
const TestConfig = {
    type: 'sqlite3',
    database: ':memory:',
    dropSchema: true,
    entities: [user_entity_1.User],
    synchronize: true,
    logging: false,
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
};
class DataSourceFactory {
    constructor() { }
    static createDataSource(env) {
        if (env == 'test') {
            return TestConfig;
        }
        return DatabaseConfig;
    }
}
const DataSourceConfig = DataSourceFactory.createDataSource(process.env.NODE_ENV);
exports.DataSourceConfig = DataSourceConfig;
exports.AppDS = new typeorm_1.DataSource(DataSourceConfig);
//# sourceMappingURL=orm.config.js.map