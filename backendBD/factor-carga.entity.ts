import { PrimaryKey } from "sequelize-typescript"
import { Column, Entity } from "typeorm"

@Entity({
    name:'factor_carga'
})
export class factorCarga{
    @Column({
        primary :true,
    })
    id : string

    @Column({ type: 'date' })
    fecha_inicio : Date

    @Column({ type: 'date' })
    fecha_termino : Date

    @Column()
    rajo: string

    @Column({type:'float'})
    tonelaje: number
}