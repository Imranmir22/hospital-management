"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpecilizationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_specilization_dto_1 = require("./create-specilization.dto");
class UpdateSpecilizationDto extends (0, mapped_types_1.PartialType)(create_specilization_dto_1.CreateSpecilizationDto) {
}
exports.UpdateSpecilizationDto = UpdateSpecilizationDto;
//# sourceMappingURL=update-specilization.dto.js.map