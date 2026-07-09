import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAvailabilitySchedulesTable1783054293366 implements MigrationInterface {
  name = "CreateAvailabilitySchedulesTable1783054293366";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("availability_schedules", true, true);
  }
}
