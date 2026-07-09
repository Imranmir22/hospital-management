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
exports.LanguageSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const language_entity_1 = require("../../modules/common/entities/language.entity");
let LanguageSeeder = class LanguageSeeder {
    constructor(languageRepository) {
        this.languageRepository = languageRepository;
    }
    async seed() {
        const languages = [
            { title: 'English' },
            { title: 'Spanish' },
            { title: 'French' },
            { title: 'German' },
            { title: 'Urdu' },
            { title: 'Hindi' },
            { title: 'chinese' },
            { title: 'Russian' },
            { title: 'Tamil' },
        ];
        const newLanguages = [];
        for (const language of languages) {
            const exists = await this.languageRepository.findOneBy({ title: language.title });
            if (!exists)
                newLanguages.push(language);
        }
        return newLanguages.length ? this.languageRepository.save(newLanguages) : [];
    }
    async drop() {
        return this.languageRepository.clear();
    }
};
exports.LanguageSeeder = LanguageSeeder;
exports.LanguageSeeder = LanguageSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(language_entity_1.Language)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LanguageSeeder);
//# sourceMappingURL=language.seeder.js.map