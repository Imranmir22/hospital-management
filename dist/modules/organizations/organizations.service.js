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
exports.OrganizationsService = void 0;
const common_1 = require("@nestjs/common");
const organization_entity_1 = require("./entities/organization.entity");
const auth_service_1 = require("../auth/auth.service");
const organization_user_entity_1 = require("./entities/organization-user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("@nestjs/typeorm");
let OrganizationsService = class OrganizationsService {
    constructor(dataSource, authService, organizationsRepository) {
        this.dataSource = dataSource;
        this.authService = authService;
        this.organizationsRepository = organizationsRepository;
    }
    async create(createOrganizationDto) {
        return await this.dataSource.transaction(async (manager) => {
            const user = await this.authService.register(createOrganizationDto.user, manager);
            const organization = manager.getRepository(organization_entity_1.Organization).create(createOrganizationDto.organization);
            const savedOrganization = await manager.getRepository(organization_entity_1.Organization).save(organization);
            const organizationUser = manager.getRepository(organization_user_entity_1.OrganizationUser).create({
                organization_id: savedOrganization.id,
                user_id: user.id,
                super_admin: true,
            });
            await manager.getRepository(organization_user_entity_1.OrganizationUser).save(organizationUser);
            return savedOrganization;
        });
    }
    findAll() {
        return `This action returns all organizations`;
    }
    findOne(id) {
        return `This action returns a #${id} organization`;
    }
    update(id, updateOrganizationDto) {
        return `This action updates a #${id} organization`;
    }
    remove(id) {
        return `This action removes a #${id} organization`;
    }
    async findBySlug(slug) {
        return await this.organizationsRepository.findOne({ where: {
                slug: slug
            } });
    }
};
exports.OrganizationsService = OrganizationsService;
exports.OrganizationsService = OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_3.InjectRepository)(organization_entity_1.Organization)),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        auth_service_1.AuthService,
        typeorm_2.Repository])
], OrganizationsService);
//# sourceMappingURL=organizations.service.js.map