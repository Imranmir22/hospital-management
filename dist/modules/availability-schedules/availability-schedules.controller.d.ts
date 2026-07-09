import { AvailabilitySchedulesService } from './availability-schedules.service';
import { CreateAvailabilityScheduleDto } from './dto/create-availability-schedule.dto';
import { UpdateAvailabilityScheduleDto } from './dto/update-availability-schedule.dto';
import { Organization } from '../organizations/entities/organization.entity';
export declare class AvailabilitySchedulesController {
    private readonly availabilitySchedulesService;
    constructor(availabilitySchedulesService: AvailabilitySchedulesService);
    create(createAvailabilityScheduleDto: CreateAvailabilityScheduleDto, organization: Organization): Promise<import("./entities/availability-schedule.entity").AvailabilitySchedule>;
    doctorSchedules(doctor_id: string, organization: Organization): string | Promise<import("./entities/availability-schedule.entity").AvailabilitySchedule[]>;
    update(id: string, updateAvailabilityScheduleDto: UpdateAvailabilityScheduleDto, organization: Organization): Promise<import("./entities/availability-schedule.entity").AvailabilitySchedule>;
    remove(id: string): string;
}
