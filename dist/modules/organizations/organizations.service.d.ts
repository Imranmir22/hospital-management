import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import { AuthService } from '../auth/auth.service';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
export declare class OrganizationsService {
    private dataSource;
    private authService;
    private organizationsRepository;
    constructor(dataSource: DataSource, authService: AuthService, organizationsRepository: Repository<Organization>);
    create(createOrganizationDto: CreateOrganizationDto): Promise<Organization>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrganizationDto: UpdateOrganizationDto): string;
    remove(id: number): string;
    findBySlug(slug: string): Promise<Organization>;
}
