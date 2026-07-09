import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';
import { Language } from '../../modules/common/entities/language.entity';
export declare class LanguageSeeder implements Seeder {
    private readonly languageRepository;
    constructor(languageRepository: Repository<Language>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
