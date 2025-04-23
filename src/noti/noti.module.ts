/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Noti } from './entities/noti.entity';
import { NotiService } from './noti.service';
import { NotiController } from './noti.controller';

@Module({
  imports: [SequelizeModule.forFeature([Noti])],
  controllers: [NotiController],
  providers: [NotiService],
  exports: [NotiService],
})
export class NotiModule {}
