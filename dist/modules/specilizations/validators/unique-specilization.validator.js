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
exports.IsSpecilizationUniqueConstraint = void 0;
exports.IsSpecilizationUnique = IsSpecilizationUnique;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const specilization_entity_1 = require("../entities/specilization.entity");
let IsSpecilizationUniqueConstraint = class IsSpecilizationUniqueConstraint {
    constructor(specilizationRepository) {
        this.specilizationRepository = specilizationRepository;
    }
    async validate(title, args) {
        if (!title)
            return true;
        const { organization_id } = args.object;
        const specilization = await this.specilizationRepository.findOneBy({
            title,
            organization_id,
        });
        return specilization ? false : true;
    }
    defaultMessage(args) {
        return 'Specilization $value already exists';
    }
};
exports.IsSpecilizationUniqueConstraint = IsSpecilizationUniqueConstraint;
exports.IsSpecilizationUniqueConstraint = IsSpecilizationUniqueConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsSpecilizationUnique', async: true }),
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(specilization_entity_1.Specilization)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IsSpecilizationUniqueConstraint);
function IsSpecilizationUnique(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsSpecilizationUniqueConstraint,
        });
    };
}
//# sourceMappingURL=unique-specilization.validator.js.map