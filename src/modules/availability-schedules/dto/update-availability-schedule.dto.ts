import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailabilityScheduleDto } from './create-availability-schedule.dto';
import { IsInt } from 'class-validator';

export class UpdateAvailabilityScheduleDto extends PartialType(CreateAvailabilityScheduleDto) {
    @IsInt()
    id: number;
}
