"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrganizationUserTable1778573185078 = void 0;
const typeorm_1 = require("typeorm");
class CreateOrganizationUserTable1778573185078 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'organization_user',
            columns: [
                {
                    name: 'id',
                    type: 'bigint',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'organization_id',
                    type: 'bigint',
                    isNullable: false,
                },
                {
                    name: 'user_id',
                    type: 'bigint',
                    isNullable: false,
                },
                {
                    name: 'super_admin',
                    type: 'tinyint',
                    default: 0,
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
            foreignKeys: [
                {
                    columnNames: ['organization_id'],
                    referencedTableName: 'organizations',
                    referencedColumnNames: ['id'],
                },
                {
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('organization_user');
    }
}
exports.CreateOrganizationUserTable1778573185078 = CreateOrganizationUserTable1778573185078;
//# sourceMappingURL=1778573185078-CreateOrganizationUserTable.js.map