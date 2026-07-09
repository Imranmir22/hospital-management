import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1778573185070 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<void> {
    
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'first_name',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '200',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'email_verified_at',
            type: 'timestamp',
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
      }),
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
