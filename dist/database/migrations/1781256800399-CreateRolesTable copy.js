"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolesTable1781256800399 = void 0;
const typeorm_1 = require("typeorm");
class CreateRolesTable1781256800399 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'roles',
            columns: [
                {
                    name: 'id',
                    type: 'bigint',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '50',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('roles');
    }
}
exports.CreateRolesTable1781256800399 = CreateRolesTable1781256800399;
//# sourceMappingURL=1781256800399-CreateRolesTable%20copy.js.map