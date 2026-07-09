import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePatientsTable1783492525000 implements MigrationInterface {
  name = "CreatePatientsTable1783492525000";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "patients",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "bigint",
            isNullable: false,
          },
          {
            name: "gender",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "dob",
            type: "date",
            isNullable: false,
          },
          {
            name: "blood_group",
            type: "varchar",
            length: "3",
            isNullable: true,
          },
          {
            name: "emergency_phone_ext",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "emergency_phone",
            type: "varchar",
            isNullable: true,
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
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("patients", true, true);
  }
}
