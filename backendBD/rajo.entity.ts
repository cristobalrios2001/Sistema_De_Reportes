import { PrimaryColumn } from "typeorm"
import { Column, Entity, OneToMany } from "typeorm"
import { factorCarga } from "./factor-carga.entity"

@Entity({
    name: 'rajo'
})
export class Rajo{
    @PrimaryColumn({name:'nombre_rajo'})
    nombre_rajo: string
    

}