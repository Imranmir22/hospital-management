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
exports.SpecilizationSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const specilization_entity_1 = require("../../modules/specilizations/entities/specilization.entity");
let SpecilizationSeeder = class SpecilizationSeeder {
    constructor(specilizationRepository) {
        this.specilizationRepository = specilizationRepository;
    }
    async seed() {
        const specializations = [
            {
                title: 'Cardiologist',
                description: 'Specializes in diagnosing and treating heart and blood vessel diseases.',
            },
            {
                title: 'Orthopedic',
                description: 'Treats conditions related to bones, joints, muscles, and ligaments.',
            },
            {
                title: 'Dermatologist',
                description: 'Specializes in skin, hair, and nail disorders.',
            },
            {
                title: 'Neurologist',
                description: 'Diagnoses and treats disorders of the brain and nervous system.',
            },
            {
                title: 'Pediatrician',
                description: 'Provides medical care for infants, children, and adolescents.',
            },
            {
                title: 'Gynecologist',
                description: 'Specializes in women’s reproductive health and related conditions.',
            },
            {
                title: 'Psychiatrist',
                description: 'Diagnoses and treats mental health conditions.',
            },
            {
                title: 'Ophthalmologist',
                description: 'Specializes in eye diseases and vision care.',
            },
            {
                title: 'ENT Specialist',
                description: 'Treats disorders of the ear, nose, and throat.',
            },
            {
                title: 'General Physician',
                description: 'Provides primary care and treats common illnesses and health concerns.',
            },
        ];
        const newSpecilizations = [];
        for (const specilization of specializations) {
            const exists = await this.specilizationRepository.findOneBy({ title: specilization.title, organization_id: null });
            if (!exists)
                newSpecilizations.push(specilization);
        }
        return newSpecilizations.length ? this.specilizationRepository.save(newSpecilizations) : [];
    }
    async drop() {
        return this.specilizationRepository.clear();
    }
};
exports.SpecilizationSeeder = SpecilizationSeeder;
exports.SpecilizationSeeder = SpecilizationSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(specilization_entity_1.Specilization)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SpecilizationSeeder);
//# sourceMappingURL=specilization.seeder.js.map