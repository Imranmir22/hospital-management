"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_seeder_1 = require("nestjs-seeder");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const roles_entity_1 = require("../modules/users/entities/roles.entity");
const language_entity_1 = require("../modules/common/entities/language.entity");
const specilization_entity_1 = require("../modules/specilizations/entities/specilization.entity");
const role_seeder_1 = require("./seeders/role.seeder");
const language_seeder_1 = require("./seeders/language.seeder");
const specilization_seeder_1 = require("./seeders/specilization.seeder");
const entities = [roles_entity_1.Role, language_entity_1.Language, specilization_entity_1.Specilization];
const registry = {
    RolesSeeder: role_seeder_1.RolesSeeder,
    LanguageSeeder: language_seeder_1.LanguageSeeder,
    SpecilizationSeeder: specilization_seeder_1.SpecilizationSeeder,
};
const requested = process.argv.slice(2).filter((arg) => !arg.startsWith('-'));
const seeders = requested.length
    ? requested.map((name) => {
        const SeederClass = registry[name];
        if (!SeederClass) {
            console.error(`Unknown seeder "${name}". Available: ${Object.keys(registry).join(', ')}`);
            process.exit(1);
        }
        return SeederClass;
    })
    : Object.values(registry);
(0, nestjs_seeder_1.seeder)({
    imports: [
        config_1.ConfigModule.forRoot(),
        typeorm_1.TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT || '3306', 10),
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_DATABASE || 'expense_splitter',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        }),
        typeorm_1.TypeOrmModule.forFeature(entities),
    ],
}).run(seeders);
//# sourceMappingURL=seeder.js.map