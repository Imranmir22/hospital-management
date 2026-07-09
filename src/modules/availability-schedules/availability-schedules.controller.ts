import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AvailabilitySchedulesService } from './availability-schedules.service';
import { CreateAvailabilityScheduleDto } from './dto/create-availability-schedule.dto';
import { UpdateAvailabilityScheduleDto } from './dto/update-availability-schedule.dto';
import { OrganizationGuard } from '../organizations/guards/organization.guard';
import { CurrentOrg } from '../organizations/decorators/organization.decorator';
import { Organization } from '../organizations/entities/organization.entity';

@Controller('organizations/:org_slug/availability-schedules')
@UseGuards(OrganizationGuard)

export class AvailabilitySchedulesController {
  constructor(private readonly availabilitySchedulesService: AvailabilitySchedulesService) {}

  @Post()
  async create(@Body() createAvailabilityScheduleDto: CreateAvailabilityScheduleDto, @CurrentOrg() organization: Organization) {
    return await this.availabilitySchedulesService.create(createAvailabilityScheduleDto, organization);
  }

  @Get('doctors/:doctor_id')
  doctorSchedules(@Param('doctor_id') doctor_id: string, @CurrentOrg() organization: Organization) {
    return this.availabilitySchedulesService.doctorSchedules(+doctor_id, organization);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvailabilityScheduleDto: UpdateAvailabilityScheduleDto, @CurrentOrg() organization: Organization) {
    return this.availabilitySchedulesService.update(+id, updateAvailabilityScheduleDto,organization);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.availabilitySchedulesService.remove(+id);
  }
}
