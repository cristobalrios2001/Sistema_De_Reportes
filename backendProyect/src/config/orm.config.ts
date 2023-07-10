import { ConfigModule } from "@nestjs/config";
import { env } from "process";
import { User } from "../entitites/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

//Para que funcione las varaibles de entorno tengo que agregar el metodo CONFIG
ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
})
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
    entities: [User],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],//importo mis entities de mi carpeta(user,)
}

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
        }
        return DatabaseConfig
    }
}
//ESTE ES PARA EL orm
const DataSourceConfig = DataSourceFactory.createDataSource(process.env.NODE_ENV);

export {DataSourceConfig}//Exporto la configuracion correspondiente

//Para la configuración del archivo json
export const  AppDS = new DataSource(DataSourceConfig)
