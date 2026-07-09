import { SpecilizationsService } from './specilizations.service';
import { CreateSpecilizationDto } from './dto/create-specilization.dto';
import { UpdateSpecilizationDto } from './dto/update-specilization.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Organization } from '../organizations/entities/organization.entity';
export declare class SpecilizationsController {
    private readonly specilizationsService;
    constructor(specilizationsService: SpecilizationsService);
    create(createSpecilizationDto: CreateSpecilizationDto, org: Organization): Promise<void>;
    findAll(paginationDto: PaginationDto, organization: Organization): Promise<{
        data: import("./entities/specilization.entity").Specilization[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<import("./entities/specilization.entity").Specilization>;
    update(id: string, updateSpecilizationDto: UpdateSpecilizationDto): string;
    remove(id: string): string;
}
