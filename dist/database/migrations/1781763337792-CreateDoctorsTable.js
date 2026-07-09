"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDoctorsTable1781763337792 = void 0;
const typeorm_1 = require("typeorm");
class CreateDoctorsTable1781763337792 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'doctors',
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
                    name: 'gender',
                    type: 'varchar',
                    length: '30',
                },
                {
                    name: 'dob',
                    type: 'date',
                },
                {
                    name: 'experience_years',
                    type: 'integer',
                },
                {
                    name: 'experience_months',
                    type: 'integer',
                },
                {
                    name: 'bio',
                    type: 'text',
                },
                {
                    name: 'consultation_fee',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                },
                {
                    name: 'is_available',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'is_verified',
                    type: 'boolean',
                    default: false,
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
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                },
                {
                    columnNames: ['organization_id'],
                    referencedTableName: 'organizations',
                    referencedColumnNames: ['id'],
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('doctors', true, true);
    }
}
exports.CreateDoctorsTable1781763337792 = CreateDoctorsTable1781763337792;
//# sourceMappingURL=1781763337792-CreateDoctorsTable.js.map