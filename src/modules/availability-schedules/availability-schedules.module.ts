import { Module } from '@nestjs/common';
import { AvailabilitySchedulesService } from './availability-schedules.service';
import { AvailabilitySchedulesController } from './availability-schedules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvailabilitySchedule } from './entities/availability-schedule.entity';
import { Doctor } from '../doctors/entities/doctor.entity';
import { OrganizationsService } from '../organizations/organizations.service';
import { AuthService } from '../auth/auth.service';
import { Organization } from '../organizations/entities/organization.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AvailabilitySchedule,Doctor, Organization, User]),
  ],
  controllers: [AvailabilitySchedulesController],
  providers: [AvailabilitySchedulesService,OrganizationsService, AuthService],
})
export class AvailabilitySchedulesModule {}
