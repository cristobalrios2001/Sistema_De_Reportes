import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig,DatabaseConfigDB} from './config/orm.config'
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { FactorCargaModule } from './modules/factor-carga/factor-carga.module';
import { RajoModule } from './modules/rajo/rajo.module';
import { VisitaModule } from './modules/visita/visita.module';//Este modulo se llama desde el main
@Module({ //Va a importar todo lo que va a ocupar
  //Conexión base de datos
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env','.env.db'],
      isGlobal: true, 
    }),
    TypeOrmModule.forRoot(DatabaseConfig),
    TypeOrmModule.forRoot({
      name : 'DBExtracciones',
      ...DatabaseConfigDB,
    }),
    UsersModule,
    AuthModule,
    FactorCargaModule,
    RajoModule,
    VisitaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
