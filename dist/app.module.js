"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/users/users.module");
const database_module_1 = require("./common/database/database.module");
const database_config_1 = require("./common/database/database.config");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./modules/auth/auth.module");
const core_1 = require("@nestjs/core");
const auth_gaurd_1 = require("./modules/auth/guards/auth.gaurd");
const organizations_module_1 = require("./modules/organizations/organizations.module");
const doctors_module_1 = require("./modules/doctors/doctors.module");
const common_module_1 = require("./modules/common/common.module");
const specilizations_module_1 = require("./modules/specilizations/specilizations.module");
const availability_schedules_module_1 = require("./modules/availability-schedules/availability-schedules.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [
                    database_config_1.default,
                ],
            }),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            organizations_module_1.OrganizationsModule,
            doctors_module_1.DoctorsModule,
            common_module_1.CommonModule,
            specilizations_module_1.SpecilizationsModule,
            availability_schedules_module_1.AvailabilitySchedulesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_GUARD, useClass: auth_gaurd_1.AuthGuard },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map