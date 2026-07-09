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
exports.DoctorLanguage = void 0;
const typeorm_1 = require("typeorm");
const doctor_entity_1 = require("./doctor.entity");
const language_entity_1 = require("../../common/entities/language.entity");
let DoctorLanguage = class DoctorLanguage {
};
exports.DoctorLanguage = DoctorLanguage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], DoctorLanguage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'doctor_id', type: 'bigint' }),
    __metadata("design:type", Number)
], DoctorLanguage.prototype, "doctor_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor),
    (0, typeorm_1.JoinColumn)({ name: 'doctor_id' }),
    __metadata("design:type", doctor_entity_1.Doctor)
], DoctorLanguage.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', type: 'bigint' }),
    __metadata("design:type", Number)
], DoctorLanguage.prototype, "language_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.Language),
    (0, typeorm_1.JoinColumn)({ name: 'language_id' }),
    __metadata("design:type", language_entity_1.Language)
], DoctorLanguage.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], DoctorLanguage.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], DoctorLanguage.prototype, "updated_at", void 0);
exports.DoctorLanguage = DoctorLanguage = __decorate([
    (0, typeorm_1.Entity)('doctor_language')
], DoctorLanguage);
//# sourceMappingURL=doctor-languages.entity.js.map