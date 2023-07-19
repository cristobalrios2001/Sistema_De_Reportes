import { Rajo } from "src/entitites/rajo.entity";

export class CreateFactorCargaDto {
    fecha_inicio: Date;
    fecha_termino: Date;
    rajo: Rajo;
    tonelaje: number;
}