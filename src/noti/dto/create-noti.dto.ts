/* eslint-disable prettier/prettier */
import { IsDateString, IsString } from "class-validator";

export class CreateNotiDto {
    @IsString()
    title: string;

    @IsDateString()
    dueDate: Date;

    @IsString()
    time: string;
  }