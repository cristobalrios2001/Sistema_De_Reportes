import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSourceConfig } from './config/orm.config';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
//Este modulo se llama desde el main
@Module({ //Va a importar todo lo que va a ocupar
  //Conexión base de datos
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true, 
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig,
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
