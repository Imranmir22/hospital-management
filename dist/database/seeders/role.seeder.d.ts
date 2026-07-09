import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { Role } from '../../modules/users/entities/roles.entity';
export declare class RolesSeeder implements Seeder {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
