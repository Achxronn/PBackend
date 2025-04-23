/* eslint-disable prettier/prettier */
import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName : 'Tlist',
    timestamps : false
})
export class Tlist extends Model {

    @Column({})
    title : string;

    @Column({})
    description : string;

    @Column({})
    dueDate : string;

    @Column({})
    finish : boolean;

    @Column({})
    priority : boolean;

    @Column({})
    progress : string;
}
