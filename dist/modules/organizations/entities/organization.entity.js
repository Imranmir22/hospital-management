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
exports.Organization = void 0;
const typeorm_1 = require("typeorm");
const phone_country_code_entity_1 = require("./phone-country-code.entity");
const country_entity_1 = require("./country.entity");
const slugify_1 = require("slugify");
let Organization = class Organization {
    generateSlug() {
        if (this.name) {
            this.slug = (0, slugify_1.default)(this.name, {
                lower: true,
                strict: true,
                trim: true,
            });
        }
    }
};
exports.Organization = Organization;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Organization.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', length: 100 }),
    __metadata("design:type", String)
], Organization.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Organization.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Organization.prototype, "generateSlug", null);
__decorate([
    (0, typeorm_1.Column)({ name: 'size', type: 'integer' }),
    __metadata("design:type", Number)
], Organization.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_country_code_id', type: 'bigint' }),
    __metadata("design:type", Number)
], Organization.prototype, "phone_country_code_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => phone_country_code_entity_1.PhoneCountryCode),
    (0, typeorm_1.JoinColumn)({ name: 'phone_country_code_id' }),
    __metadata("design:type", phone_country_code_entity_1.PhoneCountryCode)
], Organization.prototype, "PhoneCountryCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_number', length: 20 }),
    __metadata("design:type", String)
], Organization.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', length: 200 }),
    __metadata("design:type", String)
], Organization.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'country_id', type: 'bigint' }),
    __metadata("design:type", Number)
], Organization.prototype, "country_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.country),
    (0, typeorm_1.JoinColumn)({ name: 'country_id' }),
    __metadata("design:type", country_entity_1.country)
], Organization.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Organization.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Organization.prototype, "updated_at", void 0);
exports.Organization = Organization = __decorate([
    (0, typeorm_1.Entity)('organizations')
], Organization);
//# sourceMappingURL=organization.entity.js.map