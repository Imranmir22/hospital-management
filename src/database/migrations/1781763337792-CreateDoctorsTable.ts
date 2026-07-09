import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDoctorsTable1781763337792 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
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
        }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doctors', true, true);
    }

}
