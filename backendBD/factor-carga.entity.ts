import { PrimaryKey } from "sequelize-typescript"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Rajo } from "./rajo.entity"

@Entity({
    name:'factor_carga'
})
export class factorCarga{
    @PrimaryColumn({ type: 'date'})
    fecha_inicio : Date

    @PrimaryColumn({ type: 'date'})
    fecha_termino : Date

    @ManyToOne(()=>Rajo)
    @JoinColumn({ name: 'rajo', referencedColumnName: 'nombre_rajo'})
    rajo : Rajo;
    
    @Column({type:'float'})
    tonelaje: number
}