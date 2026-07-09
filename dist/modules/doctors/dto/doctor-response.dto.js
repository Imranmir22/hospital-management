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
exports.DoctorResponseDto = exports.SpecilizationDto = exports.LanguageDto = exports.UserDto = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
class UserDto {
    static from(entity) {
        const dto = new UserDto();
        dto.first_name = entity ? entity.first_name : null;
        dto.last_name = entity ? entity.last_name : null;
        dto.email = entity ? entity.email : null;
        return dto;
    }
}
exports.UserDto = UserDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "first_name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "last_name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
class LanguageDto {
    static from(entity) {
        const dto = new LanguageDto();
        dto.id = entity ? entity.id : null;
        dto.title = entity ? entity.title : null;
        return dto;
    }
}
exports.LanguageDto = LanguageDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LanguageDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LanguageDto.prototype, "title", void 0);
class SpecilizationDto {
    static from(entity) {
        const dto = new SpecilizationDto();
        dto.id = entity ? entity.id : null;
        dto.title = entity ? entity.title : null;
        return dto;
    }
}
exports.SpecilizationDto = SpecilizationDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], SpecilizationDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SpecilizationDto.prototype, "title", void 0);
class DoctorResponseDto {
    static from(entity) {
        const dto = new DoctorResponseDto();
        dto.id = entity ? entity.id : null;
        dto.bio = entity ? entity.bio : null;
        dto.gender = entity ? entity.gender : null;
        dto.dob = entity ? entity.dob : null;
        dto.experience_years = entity ? entity.experience_years : null;
        dto.experience_months = entity ? entity.experience_months : null;
        dto.consultation_fee = entity ? entity.consultation_fee : null;
        dto.is_available = entity ? entity.is_available : null;
        dto.is_verified = entity ? entity.is_verified : null;
        dto.created_at = entity ? entity.created_at : null;
        dto.user = entity && entity.user ? UserDto.from(entity.user) : null;
        dto.specilizations = entity && entity.specilizations ? entity.specilizations.map((specilization) => SpecilizationDto.from(specilization.specilization)) : [];
        dto.languages = entity && entity.languages ? entity.languages.map((language) => LanguageDto.from(language.language)) : [];
        return dto;
    }
}
exports.DoctorResponseDto = DoctorResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], DoctorResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DoctorResponseDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], DoctorResponseDto.prototype, "dob", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], DoctorResponseDto.prototype, "experience_years", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], DoctorResponseDto.prototype, "experience_months", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DoctorResponseDto.prototype, "bio", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", typeorm_1.Decimal128)
], DoctorResponseDto.prototype, "consultation_fee", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], DoctorResponseDto.prototype, "is_available", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], DoctorResponseDto.prototype, "is_verified", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], DoctorResponseDto.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => UserDto),
    __metadata("design:type", UserDto)
], DoctorResponseDto.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => SpecilizationDto),
    __metadata("design:type", Array)
], DoctorResponseDto.prototype, "specilizations", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => LanguageDto),
    __metadata("design:type", Array)
], DoctorResponseDto.prototype, "languages", void 0);
//# sourceMappingURL=doctor-response.dto.js.map