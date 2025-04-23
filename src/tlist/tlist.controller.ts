/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { TlistService } from './tlist.service';
import { CreateTlistDto } from './dto/create-tlist.dto';
import { UpdateTlistDto } from './dto/update-tlist.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tlist')
export class TlistController {
  constructor(private readonly tlistService: TlistService) {}

  @Post('/create')
  async create(@Body() createTlistDto: CreateTlistDto) {
    const createTlist = await this.tlistService.create(createTlistDto);
    if (createTlist == null) {
      throw new Error('Cannot Create Task');
    }
    return {
      message: 'create Data Complete',
      data: createTlist,
    };
  }

  @Get('/findtitle/:title')
  async findTitle(@Param('title') title: string) {
    const findTitle = await this.tlistService.findTitle(title);
    if (findTitle == null) {
      throw new NotFoundException('Not Found Data!!!');
    }
    return findTitle;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tlistService.findOne(+id);
  }

  @Patch('/update/:title')
  async update(
    @Param('title') title: string,
    @Body() updateTlistDto : UpdateTlistDto,) {
      const [updateTlist] = await this.tlistService.update(
        title,
        updateTlistDto,
      );
      console.log(updateTlist);
      if (updateTlist === 0) {
        throw new NotFoundException('Not Found Data To Update!!')
      }
      return { message: 'Update Data Complete'}
    }
  
  

  @Delete('delete/:title')
  async remove(@Param('title') title: string) {
    const destroytask = await this.tlistService.remove(title);
    console.log(destroytask);
    if (destroytask == 0) {
      throw new NotFoundException('Not Found Data to remove')
    }
    return { message: 'Create Complete' }
  }
}
