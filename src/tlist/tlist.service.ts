/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTlistDto } from './dto/create-tlist.dto';
import { UpdateTlistDto } from './dto/update-tlist.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tlist } from './entities/tlist.entity';


@Injectable()
export class TlistService {
  constructor(
    @InjectModel(Tlist)
    private TlistModel : typeof Tlist,
  ) {}
  
  async create(createTlistDto: CreateTlistDto) {
    return await this.TlistModel.create(
      createTlistDto as Partial<Tlist>,
    );
  }

  async findTitle(title: string) {
    return await this.TlistModel.findOne({
      where: {
        title : title
      },
    });
  }

  async findOne(id: number) {
    return await this.TlistModel.findByPk(id);
  }

  async update(title: string, updateTlistDto: UpdateTlistDto) {
    return await this.TlistModel.update(updateTlistDto, {
      where: { title: title },
    });
  }

  async remove(title: string) {
    return await this.TlistModel.destroy({
      where: { title: title},
    });
  }
}
