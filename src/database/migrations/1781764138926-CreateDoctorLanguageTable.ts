import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDoctorLanguageTable1781764138926 implements MigrationInterface {
    name = 'CreateDoctorLanguageTable1781764138926'

      public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                    new Table({
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
                    })
                )
            }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('doctor_language', true, true);
        }

}
