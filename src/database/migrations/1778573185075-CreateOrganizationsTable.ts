import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrganizationsTable1778573185075 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<void> {
    
    await queryRunner.createTable(
      new Table({
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
      }),
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('organizations');
  }
}
