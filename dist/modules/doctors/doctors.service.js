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
exports.DoctorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const doctor_entity_1 = require("./entities/doctor.entity");
const auth_service_1 = require("../auth/auth.service");
const doctor_specilization_entity_1 = require("./entities/doctor-specilization.entity");
const doctor_languages_entity_1 = require("./entities/doctor-languages.entity");
const users_service_1 = require("../users/users.service");
let DoctorsService = class DoctorsService {
    constructor(dataSource, authService, usersService, doctorsRepository) {
        this.dataSource = dataSource;
        this.authService = authService;
        this.usersService = usersService;
        this.doctorsRepository = doctorsRepository;
    }
    async create(createDoctorDto, organization) {
        return await this.dataSource.transaction(async (manager) => {
            const user = await this.authService.register(createDoctorDto.user, manager);
            const doctorProfile = manager.getRepository(doctor_entity_1.Doctor).create({
                ...createDoctorDto.profile,
                user_id: user.id,
                organization_id: organization.id,
            });
            const savedoctorProfile = await manager.getRepository(doctor_entity_1.Doctor).save(doctorProfile);
            const doctorSpecilizations = createDoctorDto.specilization.map((item) => {
                return { doctor_id: savedoctorProfile.id, specilization_id: item };
            });
            const savedDoctorSpeciliazation = manager.getRepository(doctor_specilization_entity_1.DoctorSpecilization).create(doctorSpecilizations);
            await manager.getRepository(doctor_specilization_entity_1.DoctorSpecilization).save(savedDoctorSpeciliazation);
            const doctorLanguages = createDoctorDto.languages.map((item) => {
                return { doctor_id: savedoctorProfile.id, language_id: item };
            });
            const savedDoctorLanguages = manager.getRepository(doctor_languages_entity_1.DoctorLanguage).create(doctorLanguages);
            await manager.getRepository(doctor_languages_entity_1.DoctorLanguage).save(savedDoctorLanguages);
            return savedoctorProfile;
        });
    }
    async findAll(organization) {
        const [doctors, total] = await this.doctorsRepository.findAndCount({
            where: { organization_id: organization.id },
            relations: ['user', 'specilizations.specilization', 'languages.language'],
            select: {
                id: true,
                organization_id: true,
                gender: true,
                dob: true,
                experience_years: true,
                experience_months: true,
                bio: true,
                consultation_fee: true,
                is_available: true,
                is_verified: true,
                created_at: true,
                user: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                },
                specilizations: {
                    id: true,
                    specilization_id: true,
                    specilization: {
                        id: true,
                        title: true,
                    }
                },
                languages: {
                    id: true,
                    language_id: true,
                    language: {
                        id: true,
                        title: true,
                    }
                },
            },
        });
        return [doctors, total];
    }
    async findOne(id, organization) {
        return await this.doctorsRepository.findOne({
            where: { id: id, organization_id: organization?.id },
            relations: ['user', 'specilizations.specilization', 'languages.language'],
            select: {
                id: true,
                organization_id: true,
                dob: true,
                experience_years: true,
                experience_months: true,
                bio: true,
                consultation_fee: true,
                is_available: true,
                is_verified: true,
                created_at: true,
                user: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                },
                specilizations: {
                    id: true,
                    specilization_id: true,
                    specilization: {
                        id: true,
                        title: true,
                    }
                },
                languages: {
                    id: true,
                    language_id: true,
                    language: {
                        id: true,
                        title: true,
                    }
                },
            }
        });
    }
    async update(id, updateDoctorDto, organization) {
        const doctor = await this.doctorsRepository.findOne({
            where: { id: id, organization_id: organization.id },
        });
        if (!doctor) {
            throw new Error('Doctor not found');
        }
        return await this.dataSource.transaction(async (manager) => {
            await this.usersService.update(doctor.user_id, updateDoctorDto.user);
            const doctorProfile = manager.getRepository(doctor_entity_1.Doctor).update({ id: doctor.id }, {
                ...updateDoctorDto.profile,
            });
            await manager.getRepository(doctor_specilization_entity_1.DoctorSpecilization).delete({
                doctor_id: doctor.id,
            });
            const doctorSpecializations = updateDoctorDto.specilization.map((specializationId) => ({
                doctor_id: doctor.id,
                specilization_id: specializationId,
            }));
            await manager.getRepository(doctor_specilization_entity_1.DoctorSpecilization).save(doctorSpecializations);
            const doctorLanguages = updateDoctorDto.languages.map((item) => {
                return { doctor_id: doctor.id, language_id: item };
            });
            const savedDoctorLanguages = manager.getRepository(doctor_languages_entity_1.DoctorLanguage).create(doctorLanguages);
            await manager.getRepository(doctor_languages_entity_1.DoctorLanguage).save(savedDoctorLanguages);
            return await this.doctorsRepository.findOne({
                where: { id: id, organization_id: organization.id },
            });
        });
    }
    remove(id) {
        return `This action removes a #${id} doctor`;
    }
};
exports.DoctorsService = DoctorsService;
exports.DoctorsService = DoctorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(doctor_entity_1.Doctor)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        auth_service_1.AuthService,
        users_service_1.UsersService,
        typeorm_2.Repository])
], DoctorsService);
//# sourceMappingURL=doctors.service.js.map