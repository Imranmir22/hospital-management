"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecilizationsController = void 0;
const common_1 = require("@nestjs/common");
const specilizations_service_1 = require("./specilizations.service");
const organization_guard_1 = require("../organizations/guards/organization.guard");
const create_specilization_dto_1 = require("./dto/create-specilization.dto");
const update_specilization_dto_1 = require("./dto/update-specilization.dto");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const organization_decorator_1 = require("../organizations/decorators/organization.decorator");
const organization_entity_1 = require("../organizations/entities/organization.entity");
let SpecilizationsController = class SpecilizationsController {
    constructor(specilizationsService) {
        this.specilizationsService = specilizationsService;
    }
    create(createSpecilizationDto, org) {
        return this.specilizationsService.create(createSpecilizationDto, org);
    }
    findAll(paginationDto, organization) {
        return this.specilizationsService.findAll(paginationDto, organization);
    }
    findOne(id) {
        return this.specilizationsService.findOne(+id);
    }
    update(id, updateSpecilizationDto) {
        return this.specilizationsService.update(+id, updateSpecilizationDto);
    }
    remove(id) {
        return this.specilizationsService.remove(+id);
    }
};
exports.SpecilizationsController = SpecilizationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, organization_decorator_1.CurrentOrg)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specilization_dto_1.CreateSpecilizationDto, organization_entity_1.Organization]),
    __metadata("design:returntype", void 0)
], SpecilizationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, organization_decorator_1.CurrentOrg)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, organization_entity_1.Organization]),
    __metadata("design:returntype", void 0)
], SpecilizationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpecilizationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_specilization_dto_1.UpdateSpecilizationDto]),
    __metadata("design:returntype", void 0)
], SpecilizationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpecilizationsController.prototype, "remove", null);
exports.SpecilizationsController = SpecilizationsController = __decorate([
    (0, common_1.UseGuards)(organization_guard_1.OrganizationGuard),
    (0, common_1.Controller)('organizations/:org_slug/specilizations'),
    __metadata("design:paramtypes", [specilizations_service_1.SpecilizationsService])
], SpecilizationsController);
//# sourceMappingURL=specilizations.controller.js.map