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
exports.DoctorSpecilization = void 0;
const specilization_entity_1 = require("../../specilizations/entities/specilization.entity");
const typeorm_1 = require("typeorm");
const doctor_entity_1 = require("./doctor.entity");
let DoctorSpecilization = class DoctorSpecilization {
};
exports.DoctorSpecilization = DoctorSpecilization;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], DoctorSpecilization.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'doctor_id', type: 'bigint' }),
    __metadata("design:type", Number)
], DoctorSpecilization.prototype, "doctor_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor),
    (0, typeorm_1.JoinColumn)({ name: 'doctor_id' }),
    __metadata("design:type", doctor_entity_1.Doctor)
], DoctorSpecilization.prototype, "Doctor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'specilization_id', type: 'bigint' }),
    __metadata("design:type", Number)
], DoctorSpecilization.prototype, "specilization_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => specilization_entity_1.Specilization),
    (0, typeorm_1.JoinColumn)({ name: 'specilization_id' }),
    __metadata("design:type", specilization_entity_1.Specilization)
], DoctorSpecilization.prototype, "specilization", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], DoctorSpecilization.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], DoctorSpecilization.prototype, "updated_at", void 0);
exports.DoctorSpecilization = DoctorSpecilization = __decorate([
    (0, typeorm_1.Entity)('doctor_specilization')
], DoctorSpecilization);
//# sourceMappingURL=doctor-specilization.entity.js.map