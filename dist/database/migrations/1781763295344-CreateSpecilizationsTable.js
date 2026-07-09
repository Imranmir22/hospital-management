"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecilizationsTable1781763295344 = void 0;
const typeorm_1 = require("typeorm");
class CreateSpecilizationsTable1781763295344 {
    constructor() {
        this.name = 'CreateSpecilizationsTable1781763295344';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'specilizations',
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
                    isNullable: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                    length: '200',
                },
                {
                    name: 'description',
                    type: 'varchar',
                    length: '400',
                    isNullable: true,
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
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('specilizations');
    }
}
exports.CreateSpecilizationsTable1781763295344 = CreateSpecilizationsTable1781763295344;
//# sourceMappingURL=1781763295344-CreateSpecilizationsTable.js.map