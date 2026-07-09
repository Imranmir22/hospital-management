import { CreateSpecilizationDto } from './dto/create-specilization.dto';
import { UpdateSpecilizationDto } from './dto/update-specilization.dto';
import { Specilization } from './entities/specilization.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Organization } from '../organizations/entities/organization.entity';
export declare class SpecilizationsService {
    private specilizationsRepository;
    constructor(specilizationsRepository: Repository<Specilization>);
    create(createSpecilizationDto: CreateSpecilizationDto, organization: Organization): Promise<void>;
    findAll(paginationDto: PaginationDto, organization: Organization): Promise<{
        data: Specilization[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: number): Promise<Specilization>;
    update(id: number, updateSpecilizationDto: UpdateSpecilizationDto): string;
    remove(id: number): string;
}
