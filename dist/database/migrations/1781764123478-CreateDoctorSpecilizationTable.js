"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDoctorSpecilizationTable1781764123478 = void 0;
const typeorm_1 = require("typeorm");
class CreateDoctorSpecilizationTable1781764123478 {
    constructor() {
        this.name = 'CreateDoctorSpecilizationTable1781764123478';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'doctor_specilization',
            columns: [
                {
                    name: 'doctor_id',
                    type: 'bigint',
                    isNullable: false,
                },
                {
                    name: 'specilization_id',
                    type: 'bigint',
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
                    columnNames: ['doctor_id'],
                    referencedTableName: 'doctors',
                    referencedColumnNames: ['id'],
                },
                {
                    columnNames: ['specilization_id'],
                    referencedTableName: 'specilizations',
                    referencedColumnNames: ['id'],
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('doctor_specilization', true, true);
    }
}
exports.CreateDoctorSpecilizationTable1781764123478 = CreateDoctorSpecilizationTable1781764123478;
//# sourceMappingURL=1781764123478-CreateDoctorSpecilizationTable.js.map