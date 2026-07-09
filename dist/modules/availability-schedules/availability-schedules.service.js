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
exports.AvailabilitySchedulesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const availability_schedule_entity_1 = require("./entities/availability-schedule.entity");
const typeorm_2 = require("@nestjs/typeorm");
const doctor_entity_1 = require("../doctors/entities/doctor.entity");
let AvailabilitySchedulesService = class AvailabilitySchedulesService {
    constructor(availabilitySchedulesRepo, doctorRepository) {
        this.availabilitySchedulesRepo = availabilitySchedulesRepo;
        this.doctorRepository = doctorRepository;
    }
    async create(createAvailabilityScheduleDto, organization) {
        const doctor = await this.doctorRepository.findOne({ where: { id: createAvailabilityScheduleDto.doctor_id, organization_id: organization.id } });
        if (!doctor) {
            throw new Error('Doctor not found in this organization');
        }
        const savedSchedule = this.availabilitySchedulesRepo.create({ ...createAvailabilityScheduleDto, organization_id: organization.id });
        await this.availabilitySchedulesRepo.save(savedSchedule);
        return savedSchedule;
    }
    findAll() {
        return `This action returns all availabilitySchedules`;
    }
    doctorSchedules(doctor_id, organization) {
        const doctor = this.doctorRepository.findOne({ where: { id: doctor_id, organization_id: organization.id } });
        if (!doctor) {
            throw new Error('Doctor not found in this organization');
        }
        return this.availabilitySchedulesRepo.find({ where: { doctor_id: doctor_id, organization_id: organization.id } });
        return `This action returns a #${doctor_id} availabilitySchedule`;
    }
    async update(id, updateAvailabilityScheduleDto, organization) {
        const doctor = this.doctorRepository.findOne({ where: { id: updateAvailabilityScheduleDto.doctor_id, organization_id: organization.id } });
        if (!doctor) {
            throw new Error('Doctor not found in this organization');
        }
        const schedule = await this.availabilitySchedulesRepo.findOne({ where: { id: id, organization_id: organization.id } });
        if (!schedule) {
            throw new Error('Schedule not found in this organization');
        }
        Object.assign(schedule, updateAvailabilityScheduleDto);
        return await this.availabilitySchedulesRepo.save(schedule);
    }
    remove(id) {
        return `This action removes a #${id} availabilitySchedule`;
    }
};
exports.AvailabilitySchedulesService = AvailabilitySchedulesService;
exports.AvailabilitySchedulesService = AvailabilitySchedulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(availability_schedule_entity_1.AvailabilitySchedule)),
    __param(1, (0, typeorm_2.InjectRepository)(doctor_entity_1.Doctor)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], AvailabilitySchedulesService);
//# sourceMappingURL=availability-schedules.service.js.map