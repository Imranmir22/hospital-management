"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAvailabilitySchedulesTable1783054293366 = void 0;
const typeorm_1 = require("typeorm");
class CreateAvailabilitySchedulesTable1783054293366 {
    constructor() {
        this.name = "CreateAvailabilitySchedulesTable1783054293366";
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "availability_schedules",
            columns: [
                {
                    name: 'id',
                    type: 'bigint',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "organization_id",
                    type: "bigint",
                    isNullable: false,
                },
                {
                    name: "doctor_id",
                    type: "bigint",
                    isNullable: false,
                },
                {
                    name: "day_of_week",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "start_time",
                    type: "time",
                    isNullable: false,
                },
                {
                    name: "end_time",
                    type: "time",
                    isNullable: false,
                },
                {
                    name: "slot_duration",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "is_active",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP",
                },
            ],
            foreignKeys: [
                {
                    columnNames: ["organization_id"],
                    referencedTableName: "organizations",
                    referencedColumnNames: ["id"],
                },
                {
                    columnNames: ["doctor_id"],
                    referencedTableName: "doctors",
                    referencedColumnNames: ["id"],
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("availability_schedules", true, true);
    }
}
exports.CreateAvailabilitySchedulesTable1783054293366 = CreateAvailabilitySchedulesTable1783054293366;
//# sourceMappingURL=1783054293366-CreateAvailabilitySchedulesTable.js.map