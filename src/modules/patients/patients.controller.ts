import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { User } from '../users/entities/user.entity';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get('profile')
  findOne(@CurrentUser() user: User) {
    return this.patientsService.findOne(user);
  }

  @Patch('profile')
  updateorCreate(@Body() updatePatientDto: UpdatePatientDto, @CurrentUser() user: User) {
    return this.patientsService.updateorCreate(updatePatientDto,user);
  }
}
