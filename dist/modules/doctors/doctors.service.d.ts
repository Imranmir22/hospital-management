import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DataSource, Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { AuthService } from '../auth/auth.service';
import { Organization } from '../organizations/entities/organization.entity';
import { UsersService } from '../users/users.service';
export declare class DoctorsService {
    private dataSource;
    private authService;
    private usersService;
    private doctorsRepository;
    constructor(dataSource: DataSource, authService: AuthService, usersService: UsersService, doctorsRepository: Repository<Doctor>);
    create(createDoctorDto: CreateDoctorDto, organization: Organization): Promise<Doctor>;
    findAll(organization: Organization): Promise<[Doctor[], number]>;
    findOne(id: number, organization?: Organization): Promise<Doctor>;
    update(id: number, updateDoctorDto: UpdateDoctorDto, organization: Organization): Promise<Doctor>;
    remove(id: number): string;
}
