import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Organization } from '../organizations/entities/organization.entity';
import { DoctorResponseDto } from './dto/doctor-response.dto';
import { ListDoctorsDto } from './dto/list-doctors.dto';
import type { Request } from 'express';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    create(createDoctorDto: CreateDoctorDto, organization: Organization): Promise<import("./entities/doctor.entity").Doctor>;
    findAll(req: Request, listDoctorsDto: ListDoctorsDto, organization: Organization): Promise<{
        current_page: any;
        data: any;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        links: ({
            url: string;
            label: string;
            active: boolean;
        } | {
            url: string;
            label: string;
        })[];
        per_page: any;
        prev_page_url: string;
        total: any;
    }>;
    findOne(id: string, organization: Organization): Promise<DoctorResponseDto>;
    update(id: string, updateDoctorDto: UpdateDoctorDto, organization: Organization): Promise<import("./entities/doctor.entity").Doctor>;
    remove(id: string): string;
}
