import { CreateAvailabilityScheduleDto } from './dto/create-availability-schedule.dto';
import { UpdateAvailabilityScheduleDto } from './dto/update-availability-schedule.dto';
import { Organization } from '../organizations/entities/organization.entity';
import { Repository } from 'typeorm';
import { AvailabilitySchedule } from './entities/availability-schedule.entity';
import { Doctor } from '../doctors/entities/doctor.entity';
export declare class AvailabilitySchedulesService {
    private availabilitySchedulesRepo;
    private doctorRepository;
    constructor(availabilitySchedulesRepo: Repository<AvailabilitySchedule>, doctorRepository: Repository<Doctor>);
    create(createAvailabilityScheduleDto: CreateAvailabilityScheduleDto, organization: Organization): Promise<AvailabilitySchedule>;
    findAll(): string;
    doctorSchedules(doctor_id: number, organization: Organization): string | Promise<AvailabilitySchedule[]>;
    update(id: number, updateAvailabilityScheduleDto: UpdateAvailabilityScheduleDto, organization: Organization): Promise<AvailabilitySchedule>;
    remove(id: number): string;
}
