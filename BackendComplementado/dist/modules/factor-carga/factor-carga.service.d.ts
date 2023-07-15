import { Repository } from 'typeorm';
import { factorCarga } from 'src/entitites/factor-carga.entity';
import { CreateFactorCargaDto } from './dto/create-factor-carga.dto';
import { UpdateFactorCargaDto } from './dto/update-factor-carga.dto';
export declare class FactorCargaService {
    private factorCargaRepository;
    constructor(factorCargaRepository: Repository<factorCarga>);
    create(createFactorCargaDto: CreateFactorCargaDto): Promise<factorCarga>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFactorCargaDto: UpdateFactorCargaDto): string;
    remove(id: number): string;
}
