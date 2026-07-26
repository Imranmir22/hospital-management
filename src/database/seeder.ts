import { seeder } from 'nestjs-seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Role } from '../modules/users/entities/roles.entity';
import { Language } from '../modules/common/entities/language.entity';
import { Specilization } from '../modules/specilizations/entities/specilization.entity';
import { RolesSeeder } from './seeders/role.seeder';
import { LanguageSeeder } from './seeders/language.seeder';
import { SpecilizationSeeder } from './seeders/specilization.seeder';

// Every entity any seeder touches must be registered for DI.
const entities = [Role, Language, Specilization];

// Registry of available seeders, keyed by the name passed on the CLI.
const registry: Record<string, new (...args: any[]) => any> = {
  RolesSeeder,
  LanguageSeeder,
  SpecilizationSeeder,
};

// `npm run seed LanguageSeeder` -> run only that one.
// `npm run seed`                -> run all of them.
const requested = process.argv.slice(2).filter((arg) => !arg.startsWith('-'));

const seeders = requested.length
  ? requested.map((name) => {
      const SeederClass = registry[name];
      if (!SeederClass) {
        console.error(
          `Unknown seeder "${name}". Available: ${Object.keys(registry).join(', ')}`,
        );
        process.exit(1);
      }
      return SeederClass;
    })
  : Object.values(registry);

seeder({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // Load the full entity graph so relations (e.g. Specilization ->
      // Organization) resolve regardless of which seeder is selected.
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forFeature(entities),
  ],
}).run(seeders);
