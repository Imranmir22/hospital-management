"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserHasRolesTable1781256800499 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserHasRolesTable1781256800499 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user_has_roles',
            columns: [
                {
                    name: 'user_id',
                    type: 'bigint',
                    isNullable: false,
                },
                {
                    name: 'role_id',
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
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                },
                {
                    columnNames: ['role_id'],
                    referencedTableName: 'roles',
                    referencedColumnNames: ['id'],
                },
            ],
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('user_has_roles');
    }
}
exports.CreateUserHasRolesTable1781256800499 = CreateUserHasRolesTable1781256800499;
//# sourceMappingURL=1781256800499-CreateUserHasRolesTable.js.map