import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactorCargaService } from './factor-carga.service';
import { CreateFactorCargaDto } from './dto/create-factor-carga.dto';
import { UpdateFactorCargaDto } from './dto/update-factor-carga.dto';
import { factorCarga } from 'src/entitites/factor-carga.entity';
import { Rajo } from 'src/entitites/rajo.entity';
@Controller('factor-carga')
export class FactorCargaController {
  constructor(private readonly factorCargaService: FactorCargaService) {}

  @Post()
  async create(@Body() createFactorCargaDto: CreateFactorCargaDto) {
    const createdFactorCarga = await this.factorCargaService.create(createFactorCargaDto);
    return createdFactorCarga;
  }

  @Get('rajos')
  async findAll() {
    return await Rajo;
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factorCargaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factorCargaService.remove(+id);
  }
}
