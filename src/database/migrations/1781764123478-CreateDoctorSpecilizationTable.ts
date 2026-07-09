import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDoctorSpecilizationTable1781764123478 implements MigrationInterface {
    name = 'CreateDoctorSpecilizationTable1781764123478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
                new Table({
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
                })
            )
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doctor_specilization', true, true);
    }

}
