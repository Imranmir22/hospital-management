"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrganizationsTable1778573185075 = void 0;
const typeorm_1 = require("typeorm");
class CreateOrganizationsTable1778573185075 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'organizations',
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
                    length: '200',
                },
                {
                    name: 'slug',
                    type: 'varchar',
                    length: '500',
                },
                {
                    name: 'size',
                    type: 'integer',
                },
                {
                    name: 'phone_country_code_id',
                    type: 'bigint',
                    unsigned: true,
                    isNullable: false,
                },
                {
                    name: 'phone_number',
                    type: 'varchar',
                    length: '20',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '200',
                },
                {
                    name: 'country_id',
                    type: 'bigint',
                    unsigned: true,
                    isNullable: false,
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
                    columnNames: ['phone_country_code_id'],
                    referencedTableName: 'phone_country_codes',
                    referencedColumnNames: ['id'],
                },
                {
                    columnNames: ['country_id'],
                    referencedTableName: 'countries',
                    referencedColumnNames: ['id'],
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('organizations');
    }
}
exports.CreateOrganizationsTable1778573185075 = CreateOrganizationsTable1778573185075;
//# sourceMappingURL=1778573185075-CreateOrganizationsTable.js.map