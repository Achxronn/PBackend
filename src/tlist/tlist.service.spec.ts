/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { TlistService } from './tlist.service';

describe('TlistService', () => {
  let service: TlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TlistService],
    }).compile();

    service = module.get<TlistService>(TlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});