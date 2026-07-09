"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDoctorLanguageTable1781764138926 = void 0;
const typeorm_1 = require("typeorm");
class CreateDoctorLanguageTable1781764138926 {
    constructor() {
        this.name = 'CreateDoctorLanguageTable1781764138926';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'doctor_language',
            columns: [
                {
                    name: 'doctor_id',
                    type: 'bigint',
                    isNullable: false,
                },
                {
                    name: 'language_id',
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
                    columnNames: ['language_id'],
                    referencedTableName: 'languages',
                    referencedColumnNames: ['id'],
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('doctor_language', true, true);
    }
}
exports.CreateDoctorLanguageTable1781764138926 = CreateDoctorLanguageTable1781764138926;
//# sourceMappingURL=1781764138926-CreateDoctorLanguageTable.js.map