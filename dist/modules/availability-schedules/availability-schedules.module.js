"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilitySchedulesModule = void 0;
const common_1 = require("@nestjs/common");
const availability_schedules_service_1 = require("./availability-schedules.service");
const availability_schedules_controller_1 = require("./availability-schedules.controller");
const typeorm_1 = require("@nestjs/typeorm");
const availability_schedule_entity_1 = require("./entities/availability-schedule.entity");
const doctor_entity_1 = require("../doctors/entities/doctor.entity");
const organizations_service_1 = require("../organizations/organizations.service");
const auth_service_1 = require("../auth/auth.service");
const organization_entity_1 = require("../organizations/entities/organization.entity");
const user_entity_1 = require("../users/entities/user.entity");
let AvailabilitySchedulesModule = class AvailabilitySchedulesModule {
};
exports.AvailabilitySchedulesModule = AvailabilitySchedulesModule;
exports.AvailabilitySchedulesModule = AvailabilitySchedulesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([availability_schedule_entity_1.AvailabilitySchedule, doctor_entity_1.Doctor, organization_entity_1.Organization, user_entity_1.User]),
        ],
        controllers: [availability_schedules_controller_1.AvailabilitySchedulesController],
        providers: [availability_schedules_service_1.AvailabilitySchedulesService, organizations_service_1.OrganizationsService, auth_service_1.AuthService],
    })
], AvailabilitySchedulesModule);
//# sourceMappingURL=availability-schedules.module.js.map