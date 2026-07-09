"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLanguagesTable1781763337791 = void 0;
const typeorm_1 = require("typeorm");
class CreateLanguagesTable1781763337791 {
    constructor() {
        this.name = 'CreateLanguagesTable1781763337791';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'languages',
            columns: [
                {
                    name: 'id',
                    type: 'bigint',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    length: '200',
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('languages');
    }
}
exports.CreateLanguagesTable1781763337791 = CreateLanguagesTable1781763337791;
//# sourceMappingURL=1781763337791-CreateLanguagesTable.js.map