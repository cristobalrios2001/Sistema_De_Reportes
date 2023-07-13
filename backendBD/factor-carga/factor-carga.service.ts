import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { factorCarga } from 'src/entitites/factor-carga.entity';
import { CreateFactorCargaDto } from './dto/create-factor-carga.dto';
import { UpdateFactorCargaDto } from './dto/update-factor-carga.dto';

@Injectable()
export class FactorCargaService {
  //Creo mi repositorio para que haga la conexión a la base de datos
  constructor(
    @InjectRepository(factorCarga) private factorCargaRepository: Repository <factorCarga>,
  ){}
  async create(createFactorCargaDto: CreateFactorCargaDto) {
    const factorCarga = this.factorCargaRepository.create(createFactorCargaDto);
    return await this.factorCargaRepository.save(factorCarga);
  }

  findAll() {
    return `This action returns all factorCarga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factorCarga`;
  }

  update(id: number, updateFactorCargaDto: UpdateFactorCargaDto) {
    return `This action updates a #${id} factorCarga`;
  }

  remove(id: number) {
    return `This action removes a #${id} factorCarga`;
  }
  
  async findByDateRange(startDate:Date,endDate:Date){
    return await this.factorCargaRepository.find({
      where:{
        fecha_inicio : startDate,
        fecha_termino : endDate,
      },
    });
  }
}
