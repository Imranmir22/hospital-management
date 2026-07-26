import { PatientsService } from '../services/patients.service';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { User } from '../../users/entities/user.entity';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    upsert(createPatientDto: CreatePatientDto, user: User): Promise<import("../entities/patient.entity").Patient>;
    getProfile(user: User): Promise<import("../entities/patient.entity").Patient>;
}
