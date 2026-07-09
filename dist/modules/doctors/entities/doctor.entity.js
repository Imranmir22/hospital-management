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
exports.Doctor = void 0;
const organization_entity_1 = require("../../organizations/entities/organization.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const doctor_specilization_entity_1 = require("./doctor-specilization.entity");
const doctor_languages_entity_1 = require("./doctor-languages.entity");
let Doctor = class Doctor {
};
exports.Doctor = Doctor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Doctor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organization_id', type: 'bigint' }),
    __metadata("design:type", Number)
], Doctor.prototype, "organization_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organization_entity_1.Organization),
    (0, typeorm_1.JoinColumn)({ name: 'organization_id' }),
    __metadata("design:type", organization_entity_1.Organization)
], Doctor.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'bigint' }),
    __metadata("design:type", Number)
], Doctor.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Doctor.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => doctor_specilization_entity_1.DoctorSpecilization, (specilization) => specilization.Doctor),
    __metadata("design:type", Array)
], Doctor.prototype, "specilizations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => doctor_languages_entity_1.DoctorLanguage, (language) => language.doctor),
    __metadata("design:type", Array)
], Doctor.prototype, "languages", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gender', length: 50 }),
    __metadata("design:type", String)
], Doctor.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dob', type: 'date' }),
    __metadata("design:type", Date)
], Doctor.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'experience_years', type: 'int' }),
    __metadata("design:type", Number)
], Doctor.prototype, "experience_years", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'experience_months', type: 'int' }),
    __metadata("design:type", Number)
], Doctor.prototype, "experience_months", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bio', type: 'text' }),
    __metadata("design:type", String)
], Doctor.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'consultation_fee', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Doctor.prototype, "consultation_fee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_available' }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "is_available", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_verified' }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "is_verified", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Doctor.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Doctor.prototype, "updated_at", void 0);
exports.Doctor = Doctor = __decorate([
    (0, typeorm_1.Entity)('doctors')
], Doctor);
//# sourceMappingURL=doctor.entity.js.map