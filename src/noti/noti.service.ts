/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noti } from './entities/noti.entity';
import { CreateNotiDto } from './dto/create-noti.dto';

@Injectable()
export class NotiService {
  constructor(
    @InjectRepository(Noti)
    private notiRepository: Repository<Noti>,
  ) {}

  async createNoti(createNotiDto: CreateNotiDto): Promise<Noti> {
    const noti = new Noti(); // Create an instance manually
    noti.title = createNotiDto.title;
    noti.dueDate = new Date(createNotiDto.dueDate); // Ensure date format is correct
    noti.time = createNotiDto.time;

    await noti.save(); // Save it explicitly
    return noti;
  }

}
