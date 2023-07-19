import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Rajo } from "./rajo.entity";
@Entity({
    name:'fase'
})
export class Fase{
    @ManyToOne(() => Rajo)
    @PrimaryColumn({ name: 'nombre_rajo' })
    rajo: string;

    @PrimaryColumn({name:'id_fase'})
    id_fase : string
    
    @Column({type:'boolean'})
    estado: boolean
}