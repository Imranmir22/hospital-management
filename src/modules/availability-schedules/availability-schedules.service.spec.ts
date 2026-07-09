import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilitySchedulesService } from './availability-schedules.service';

describe('AvailabilitySchedulesService', () => {
  let service: AvailabilitySchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailabilitySchedulesService],
    }).compile();

    service = module.get<AvailabilitySchedulesService>(AvailabilitySchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
