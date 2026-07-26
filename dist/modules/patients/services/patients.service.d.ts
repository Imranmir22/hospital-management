import { CreatePatientDto } from '../dto/create-patient.dto';
import { User } from '../../users/entities/user.entity';
import { Repository } from 'typeorm';
import { Patient } from '../entities/patient.entity';
export declare class PatientsService {
    private readonly patientRepository;
    private readonly userRepository;
    constructor(patientRepository: Repository<Patient>, userRepository: Repository<User>);
    upsert(createPatientDto: CreatePatientDto, user: User): Promise<Patient>;
    getProfile(user: User): Promise<Patient>;
}
