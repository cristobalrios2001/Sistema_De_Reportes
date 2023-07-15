import { ConfigModule } from "@nestjs/config";
import { env } from "process";
import { User } from "../entitites/user.entity";
import { DataSource, DataSourceOptions, Entity } from "typeorm";
import {config } from 'dotenv'
import { factorCarga } from "src/entitites/factor-carga.entity";
import { Rajo } from "src/entitites/rajo.entity";

//Para que funcione las varaibles de entorno tengo que agregar el metodo CONFIG
ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
})
//Para la base de datos de extracciones
config({
    path: '.env.db',
})

const entities = [User,factorCarga,Rajo];
const entityFiles = entities.map(entity => entity.prototype.constructor)

//Configuracion base de datos
const DatabaseConfig : DataSourceOptions = {
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT as string),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE == "true",
    logging: process.env.TYPEORM_LOGGING == "true",
    entities: entityFiles,
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],//importo mis entities de mi carpeta(user,)
}

const DatabaseConfigDB: DataSourceOptions = {
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT as string),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE == "true",
    logging: process.env.TYPEORM_LOGGING == "true",
    entities: [factorCarga,Rajo],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
};
const TestConfig: DataSourceOptions = {
    type: 'sqlite3' as any,
    database: ':memory:',
    dropSchema: true,
    entities: [User],
    synchronize: true,
    logging: false,
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    
}
//Creo una clase factory para que me retorne la configuracion correspondiente
class DataSourceFactory{
    private constructor(){}
    //
    static createDataSource(env:String): DataSourceOptions{//En caso que quiera hacer testing le paso una llave a create
        if(env == 'test'){
            return TestConfig
        }else if (env === 'extracciones') {
            return DatabaseConfigDB;
        }else if (env == 'development'){
            return DatabaseConfig;
        }
    }
}
//

const DataSourceConfig = DataSourceFactory.createDataSource(process.env.NODE_ENV);

export { DatabaseConfig, DatabaseConfigDB }; //Exporto la configuracion correspondiente
//Exporto la configuracion correspondiente

//Para la configuración del archivo json
export const  AppDS = new DataSource(DataSourceConfig)
function loadEntities(arg0: (typeof User | typeof factorCarga | typeof Rajo)[]): import("typeorm").MixedList<string | Function | import("typeorm").EntitySchema<any>> {
    throw new Error("Function not implemented.");
}

