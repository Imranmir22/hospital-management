import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DataSource, Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { AuthService } from '../auth/auth.service';
import { Organization } from '../organizations/entities/organization.entity';
import { DoctorSpecilization } from './entities/doctor-specilization.entity';
import { DoctorLanguage } from './entities/doctor-languages.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class DoctorsService {
  constructor(
    private dataSource: DataSource,
    private authService: AuthService,
    private usersService: UsersService,

    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,  ){

  }
  async create(createDoctorDto: CreateDoctorDto, organization: Organization) {
    return await this.dataSource.transaction(async (manager) => {

      //create User
        const user = await this.authService.register(createDoctorDto.user, manager);

      //create Doctor Profile
      const doctorProfile = manager.getRepository(Doctor).create({
        ...createDoctorDto.profile,
        user_id: user.id,
        organization_id: organization.id,
      });
      const savedoctorProfile = await manager.getRepository(Doctor).save(doctorProfile);
      
      //Create Doctors specilizations
      const doctorSpecilizations = createDoctorDto.specilization.map((item)=>{
        return {doctor_id:savedoctorProfile.id,specilization_id:item}
      })
      
      const savedDoctorSpeciliazation = manager.getRepository(DoctorSpecilization).create(doctorSpecilizations)
      await manager.getRepository(DoctorSpecilization).save(savedDoctorSpeciliazation);

      //Create Doctors languages
      const doctorLanguages = createDoctorDto.languages.map((item)=>{
        return {doctor_id:savedoctorProfile.id,language_id:item}
      })
      
      const savedDoctorLanguages = manager.getRepository(DoctorLanguage).create(doctorLanguages)
      await manager.getRepository(DoctorLanguage).save(savedDoctorLanguages);

      return savedoctorProfile;
    });
  }

  async findAll(organization: Organization): Promise<[Doctor[], number]> {
    const [doctors, total] = await this.doctorsRepository.findAndCount({
      where: { organization_id: organization.id },
      relations: ['user', 'specilizations.specilization', 'languages.language'],
      select: {
        id: true,
        organization_id: true,
        gender: true,
        dob: true,
        experience_years: true,
        experience_months: true,
        bio: true,
        consultation_fee: true,
        is_available: true,
        is_verified: true,
        created_at: true,
        user: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
        specilizations: {
          id: true,
          specilization_id: true,
          specilization: {
            id: true,
            title: true,
          }
        },
        languages: {
          id: true,
          language_id: true,
          language: {
            id: true,
            title: true,
          }
        },
      },
    });
    return [doctors, total];
  }

  async findOne(id: number, organization?: Organization) {
    return await this.doctorsRepository.findOne({
      where: { id:id, organization_id: organization?.id },
      relations: ['user', 'specilizations.specilization', 'languages.language'],
      select: {
        id: true,
        organization_id: true,
        dob: true,
        experience_years: true,
        experience_months: true,
        bio: true,
        consultation_fee: true,
        is_available: true,
        is_verified: true,
        created_at: true,
        user: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
        specilizations: {
          id: true,
          specilization_id: true,
          specilization: {
            id: true,
            title: true,
          }
        },
        languages: {
          id: true,
          language_id: true,
          language: {
            id: true,
            title: true,
          }
        },
      }
    });
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto, organization: Organization) {
    const doctor = await this.doctorsRepository.findOne({
      where : { id:id, organization_id: organization.id },
    })

    if(!doctor){
      throw new Error('Doctor not found');
    }

    return await this.dataSource.transaction(async (manager) => {
      await this.usersService.update(doctor.user_id, updateDoctorDto.user);

      const doctorProfile = manager.getRepository(Doctor).update({id:doctor.id},{
        ...updateDoctorDto.profile,
      });
      
      await manager.getRepository(DoctorSpecilization).delete({
        doctor_id: doctor.id,
      });

      const doctorSpecializations = updateDoctorDto.specilization.map(
        (specializationId) => ({
          doctor_id: doctor.id,
          specilization_id: specializationId,
        }),
      );

      await manager.getRepository(DoctorSpecilization).save(
        doctorSpecializations,
      );

      //Create Doctors languages
      const doctorLanguages = updateDoctorDto.languages.map((item)=>{
        return {doctor_id:doctor.id,language_id:item}
      })
      
      const savedDoctorLanguages = manager.getRepository(DoctorLanguage).create(doctorLanguages)
      await manager.getRepository(DoctorLanguage).save(savedDoctorLanguages);
      return await this.doctorsRepository.findOne({
        where : { id:id, organization_id: organization.id },
      })
    })
    
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
