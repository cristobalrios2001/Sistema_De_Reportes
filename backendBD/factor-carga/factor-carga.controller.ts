import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactorCargaService } from './factor-carga.service';
import { CreateFactorCargaDto } from './dto/create-factor-carga.dto';
import { UpdateFactorCargaDto } from './dto/update-factor-carga.dto';
import { factorCarga } from 'src/entitites/factor-carga.entity';

@Controller('factor-carga')
export class FactorCargaController {
  constructor(private readonly factorCargaService: FactorCargaService) {}

  @Post()
  async create(@Body() createFactorCargaDto: CreateFactorCargaDto) {
    return this.factorCargaService.create(createFactorCargaDto);
  }

  @Get()
  async findAll() {
    return await this.factorCargaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factorCargaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactorCargaDto: UpdateFactorCargaDto) {
    return this.factorCargaService.update(+id, updateFactorCargaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factorCargaService.remove(+id);
  }
}
