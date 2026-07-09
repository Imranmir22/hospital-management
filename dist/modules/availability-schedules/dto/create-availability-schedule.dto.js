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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAvailabilityScheduleDto = void 0;
const class_validator_1 = require("class-validator");
const week_days_enum_1 = require("../enums/week-days.enum");
class CreateAvailabilityScheduleDto {
}
exports.CreateAvailabilityScheduleDto = CreateAvailabilityScheduleDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAvailabilityScheduleDto.prototype, "doctor_id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(week_days_enum_1.WeekDays),
    __metadata("design:type", String)
], CreateAvailabilityScheduleDto.prototype, "day_of_week", void 0);
__decorate([
    (0, class_validator_1.IsMilitaryTime)(),
    __metadata("design:type", String)
], CreateAvailabilityScheduleDto.prototype, "start_time", void 0);
__decorate([
    (0, class_validator_1.IsMilitaryTime)(),
    __metadata("design:type", String)
], CreateAvailabilityScheduleDto.prototype, "end_time", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(5),
    __metadata("design:type", Number)
], CreateAvailabilityScheduleDto.prototype, "slot_duration", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAvailabilityScheduleDto.prototype, "organization_id", void 0);
//# sourceMappingURL=create-availability-schedule.dto.js.map