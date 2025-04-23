/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TlistService } from './tlist.service';
import { TlistController } from './tlist.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tlist } from './entities/tlist.entity';

@Module({
  imports: [SequelizeModule.forFeature([Tlist])],
  controllers: [TlistController],
  providers: [TlistService],
})
export class TlistModule {}
