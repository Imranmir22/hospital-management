import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient) private readonly patientRepository: Repository<Patient>,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}
  
  async create(createPatientDto: CreatePatientDto, user: User) {

    if(await this.patientRepository.findOne({ where: { user_id: user.id } })) {
      throw new Error('Profile already exists for this user');
    }

    const patient = this.patientRepository.create({
      ...createPatientDto,
      user: user
    });
    return this.patientRepository.save(patient);
  }

  findAll() {
    return `This action returns all patients`;
  }

  async findOne(user: User) {
    return await this.patientRepository.findOne({ where: { user_id: user.id } });
  }

  async updateorCreate(updatePatientDto: UpdatePatientDto, user: User) {
    const profile = await this.patientRepository.findOne({ where: { user_id: user.id } });
    
    if(!profile) {
     return  await this.patientRepository.save({
        ...updatePatientDto,
        user: user
      });
    }

    Object.assign(profile, updatePatientDto);
    return this.patientRepository.save(profile);
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
