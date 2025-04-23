/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { NotiService } from './noti.service';
import { CreateNotiDto } from './dto/create-noti.dto';

@Controller('noti')
export class NotiController {
  constructor(private readonly notiService: NotiService) {}

  @Post()
  create(@Body() createNotiDto: CreateNotiDto) {
    return this.notiService.createNoti(createNotiDto);
  }
}
