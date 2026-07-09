"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecilizationsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const specilizations_service_1 = require("./specilizations.service");
const specilizations_controller_1 = require("./specilizations.controller");
const specilization_entity_1 = require("./entities/specilization.entity");
const unique_specilization_validator_1 = require("./validators/unique-specilization.validator");
const organizations_module_1 = require("../organizations/organizations.module");
let SpecilizationsModule = class SpecilizationsModule {
};
exports.SpecilizationsModule = SpecilizationsModule;
exports.SpecilizationsModule = SpecilizationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([specilization_entity_1.Specilization]), organizations_module_1.OrganizationsModule],
        controllers: [specilizations_controller_1.SpecilizationsController],
        providers: [specilizations_service_1.SpecilizationsService, unique_specilization_validator_1.IsSpecilizationUniqueConstraint],
    })
], SpecilizationsModule);
//# sourceMappingURL=specilizations.module.js.map