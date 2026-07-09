import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { Specilization } from '../../modules/specilizations/entities/specilization.entity';
export declare class SpecilizationSeeder implements Seeder {
    private readonly specilizationRepository;
    constructor(specilizationRepository: Repository<Specilization>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
