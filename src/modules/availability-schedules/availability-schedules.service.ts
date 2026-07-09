import { Injectable } from '@nestjs/common';
import { CreateAvailabilityScheduleDto } from './dto/create-availability-schedule.dto';
import { UpdateAvailabilityScheduleDto } from './dto/update-availability-schedule.dto';
import { Organization } from '../organizations/entities/organization.entity';
import { DataSource,Repository } from 'typeorm';
import { AvailabilitySchedule } from './entities/availability-schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from '../doctors/entities/doctor.entity';

@Injectable()
export class AvailabilitySchedulesService {
  constructor(
    // private dataSource: DataSource,
      @InjectRepository(AvailabilitySchedule)
      private availabilitySchedulesRepo: Repository<AvailabilitySchedule>,

      @InjectRepository(Doctor)
      private doctorRepository: Repository<Doctor>,
  ){

  }
  async create(createAvailabilityScheduleDto: CreateAvailabilityScheduleDto, organization: Organization) {
    const doctor = await this.doctorRepository.findOne({where:{id:createAvailabilityScheduleDto.doctor_id,organization_id:organization.id}});
    if(!doctor){
      throw new Error('Doctor not found in this organization');
    }
    const savedSchedule = this.availabilitySchedulesRepo.create({...createAvailabilityScheduleDto,organization_id:organization.id});
    await this.availabilitySchedulesRepo.save(savedSchedule);
    return savedSchedule;
  }

  findAll() {
    return `This action returns all availabilitySchedules`;
  }

  doctorSchedules(doctor_id: number, organization: Organization) {
    const doctor = this.doctorRepository.findOne({where:{id:doctor_id,organization_id:organization.id}});
    if(!doctor){
      throw new Error('Doctor not found in this organization');
    }
    return this.availabilitySchedulesRepo.find({where:{doctor_id:doctor_id,organization_id:organization.id}});
    return `This action returns a #${doctor_id} availabilitySchedule`;
  }

  async update(id: number, updateAvailabilityScheduleDto: UpdateAvailabilityScheduleDto, organization: Organization) {
    
    const doctor = this.doctorRepository.findOne({where:{id:updateAvailabilityScheduleDto.doctor_id,organization_id:organization.id}});
    if(!doctor){
      throw new Error('Doctor not found in this organization');
    }

    const schedule =await this.availabilitySchedulesRepo.findOne({where:{id:id, organization_id:organization.id}})

    if(!schedule){
      throw new Error('Schedule not found in this organization');
    }

    Object.assign(schedule, updateAvailabilityScheduleDto);

    return await this.availabilitySchedulesRepo.save(schedule);
  
  }

  remove(id: number) {
    return `This action removes a #${id} availabilitySchedule`;
  }
}
