"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1778573185070 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1778573185070 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUsersTable1778573185070 = CreateUsersTable1778573185070;
//# sourceMappingURL=1778573185070-CreateUsersTable.js.map