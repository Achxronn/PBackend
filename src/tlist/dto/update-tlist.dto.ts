/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateTlistDto } from './create-tlist.dto';

export class UpdateTlistDto extends PartialType(CreateTlistDto) {}
