import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SerializeOptions,UseInterceptors, ClassSerializerInterceptor, Req, Query, } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { OrganizationGuard } from '../organizations/guards/organization.guard';
import { CurrentOrg } from '../organizations/decorators/organization.decorator';
import { Organization } from '../organizations/entities/organization.entity';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { DoctorResponseDto } from './dto/doctor-response.dto';
import { plainToInstance } from 'class-transformer';
import { PaginationHelper } from 'src/common/pagination/pagination.helper';
import { ListDoctorsDto } from './dto/list-doctors.dto';
import type { Request } from 'express';
import { DoctorOrganizationGuard } from './guards/doctor-organization/doctor-organization.guard';

@Controller('organizations/:org_slug/doctors')
@UseGuards(OrganizationGuard)
@UseInterceptors(ClassSerializerInterceptor)

export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto, @CurrentOrg() organization: Organization) {
    return this.doctorsService.create(createDoctorDto, organization);
  }

  @Get()
  async findAll(@Req() req: Request,@Query() listDoctorsDto : ListDoctorsDto, @CurrentOrg() organization: Organization) {
    const [doctors, total] =  await this.doctorsService.findAll(organization);
    return PaginationHelper.paginate(
      doctors.map((entity) =>DoctorResponseDto.from(entity)),
      {
        page: listDoctorsDto.page ?? 1,
        perPage: listDoctorsDto.per_page ?? 15,
        total,
        path: req?.path,
      },
    );  
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentOrg() organization: Organization) {
    const doctor = await this.doctorsService.findOne(+id, organization);
    return  DoctorResponseDto.from(doctor)
  }

  @Patch(':id')
  // @UseGuards(DoctorOrganizationGuard)
  update(@Param('id') id: string, @Body() updateDoctorDto:UpdateDoctorDto ,  @CurrentOrg() organization: Organization) {
    return this.doctorsService.update(+id, updateDoctorDto, organization);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(+id);
  }
}
