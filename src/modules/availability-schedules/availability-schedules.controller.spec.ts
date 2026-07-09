import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilitySchedulesController } from './availability-schedules.controller';
import { AvailabilitySchedulesService } from './availability-schedules.service';

describe('AvailabilitySchedulesController', () => {
  let controller: AvailabilitySchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailabilitySchedulesController],
      providers: [AvailabilitySchedulesService],
    }).compile();

    controller = module.get<AvailabilitySchedulesController>(AvailabilitySchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
