/* eslint-disable prettier/prettier */
import { Column,Table,Model } from "sequelize-typescript";
;

@Table({
    tableName : 'noti',
    timestamps : false
})

export class Noti extends Model {

  @Column({})
  title: string;

  @Column({})
  dueDate: Date;

  @Column({})
  time: string;
}