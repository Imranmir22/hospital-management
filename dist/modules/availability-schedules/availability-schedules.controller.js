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
exports.AvailabilitySchedulesController = void 0;
const common_1 = require("@nestjs/common");
const availability_schedules_service_1 = require("./availability-schedules.service");
const create_availability_schedule_dto_1 = require("./dto/create-availability-schedule.dto");
const update_availability_schedule_dto_1 = require("./dto/update-availability-schedule.dto");
const organization_guard_1 = require("../organizations/guards/organization.guard");
const organization_decorator_1 = require("../organizations/decorators/organization.decorator");
const organization_entity_1 = require("../organizations/entities/organization.entity");
let AvailabilitySchedulesController = class AvailabilitySchedulesController {
    constructor(availabilitySchedulesService) {
        this.availabilitySchedulesService = availabilitySchedulesService;
    }
    async create(createAvailabilityScheduleDto, organization) {
        return await this.availabilitySchedulesService.create(createAvailabilityScheduleDto, organization);
    }
    doctorSchedules(doctor_id, organization) {
        return this.availabilitySchedulesService.doctorSchedules(+doctor_id, organization);
    }
    update(id, updateAvailabilityScheduleDto, organization) {
        return this.availabilitySchedulesService.update(+id, updateAvailabilityScheduleDto, organization);
    }
    remove(id) {
        return this.availabilitySchedulesService.remove(+id);
    }
};
exports.AvailabilitySchedulesController = AvailabilitySchedulesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, organization_decorator_1.CurrentOrg)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_availability_schedule_dto_1.CreateAvailabilityScheduleDto, organization_entity_1.Organization]),
    __metadata("design:returntype", Promise)
], AvailabilitySchedulesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('doctors/:doctor_id'),
    __param(0, (0, common_1.Param)('doctor_id')),
    __param(1, (0, organization_decorator_1.CurrentOrg)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, organization_entity_1.Organization]),
    __metadata("design:returntype", void 0)
], AvailabilitySchedulesController.prototype, "doctorSchedules", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, organization_decorator_1.CurrentOrg)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_availability_schedule_dto_1.UpdateAvailabilityScheduleDto, organization_entity_1.Organization]),
    __metadata("design:returntype", void 0)
], AvailabilitySchedulesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvailabilitySchedulesController.prototype, "remove", null);
exports.AvailabilitySchedulesController = AvailabilitySchedulesController = __decorate([
    (0, common_1.Controller)('organizations/:org_slug/availability-schedules'),
    (0, common_1.UseGuards)(organization_guard_1.OrganizationGuard),
    __metadata("design:paramtypes", [availability_schedules_service_1.AvailabilitySchedulesService])
], AvailabilitySchedulesController);
//# sourceMappingURL=availability-schedules.controller.js.map