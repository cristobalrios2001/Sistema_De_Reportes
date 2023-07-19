"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppExtracciones = exports.AppDS = exports.DatabaseConfigDB = exports.DatabaseConfig = void 0;
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const factor_carga_entity_1 = require("../entities/factor-carga.entity");
const rajo_entity_1 = require("../entities/rajo.entity");
config_1.ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
});
(0, dotenv_1.config)({ path: '.env', });
const entities = [user_entity_1.User];
const entityFiles = entities.map(entity => entity.prototype.constructor);
(0, dotenv_1.config)({ path: '.env.db', });
const extraccionesEntities = [factor_carga_entity_1.FactorCarga, rajo_entity_1.Rajo];
const extraccionesEntityFiles = extraccionesEntities.map(entity => entity.prototype.constructor);
const DatabaseConfig = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE == "true",
    logging: process.env.TYPEORM_LOGGING == "true",
    entities: [user_entity_1.User, factor_carga_entity_1.FactorCarga, rajo_entity_1.Rajo],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
};
exports.DatabaseConfig = DatabaseConfig;
const DatabaseConfigDB = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE == "true",
    logging: process.env.TYPEORM_LOGGING == "true",
    entities: [factor_carga_entity_1.FactorCarga, rajo_entity_1.Rajo],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
};
exports.DatabaseConfigDB = DatabaseConfigDB;
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
        if (env == 'extracciones') {
            return DatabaseConfigDB;
        }
        else {
            return DatabaseConfig;
        }
    }
}
const DataSourceConfig = DataSourceFactory.createDataSource(process.env.NODE_ENV);
exports.AppDS = new typeorm_1.DataSource(DataSourceConfig);
exports.AppExtracciones = new typeorm_1.DataSource(DatabaseConfigDB);
//# sourceMappingURL=orm.config.js.map