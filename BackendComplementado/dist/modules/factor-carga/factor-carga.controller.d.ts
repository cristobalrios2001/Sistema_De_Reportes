import { FactorCargaService } from './factor-carga.service';
import { CreateFactorCargaDto } from './dto/create-factor-carga.dto';
import { factorCarga } from 'src/entitites/factor-carga.entity';
import { Rajo } from 'src/entitites/rajo.entity';
export declare class FactorCargaController {
    private readonly factorCargaService;
    constructor(factorCargaService: FactorCargaService);
    create(createFactorCargaDto: CreateFactorCargaDto): Promise<factorCarga>;
    findAll(): Promise<typeof Rajo>;
    findOne(id: string): string;
    remove(id: string): string;
}
