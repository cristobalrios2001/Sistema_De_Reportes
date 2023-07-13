import { Module } from '@nestjs/common';
import { FactorCargaService } from './factor-carga.service';
import { FactorCargaController } from './factor-carga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { factorCarga } from 'src/entitites/factor-carga.entity';
@Module({
  //importar mi base datos
  imports : [
      TypeOrmModule.forFeature([factorCarga])
  ],
  controllers: [FactorCargaController],
  providers: [FactorCargaService],
  exports : [FactorCargaService]
})
export class FactorCargaModule {}
