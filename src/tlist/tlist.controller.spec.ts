/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { TlistController } from './tlist.controller';
import { TlistService } from './tlist.service';

describe('TlistController', () => {
  let controller: TlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TlistController],
      providers: [TlistService],
    }).compile();

    controller = module.get<TlistController>(TlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
