"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUniqueIndexToPatientsUserId1783573000000 = void 0;
const typeorm_1 = require("typeorm");
class AddUniqueIndexToPatientsUserId1783573000000 {
    constructor() {
        this.name = "AddUniqueIndexToPatientsUserId1783573000000";
    }
    async up(queryRunner) {
        await queryRunner.createIndex("patients", new typeorm_1.TableIndex({
            name: "UQ_patients_user_id",
            columnNames: ["user_id"],
            isUnique: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropIndex("patients", "UQ_patients_user_id");
    }
}
exports.AddUniqueIndexToPatientsUserId1783573000000 = AddUniqueIndexToPatientsUserId1783573000000;
//# sourceMappingURL=1783573000000-AddUniqueIndexToPatientsUserId.js.map