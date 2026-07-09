import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './common/database/database.module';
import databaseConfig from './common/database/database.config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/guards/auth.gaurd'; 
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { CommonModule } from './modules/common/common.module';
import { SpecilizationsModule } from './modules/specilizations/specilizations.module';
// import { SchedulesModule } from './modules/schedules/schedules.module';
import { AvailabilitySchedulesModule } from './modules/availability-schedules/availability-schedules.module';
import { PatientsModule } from './modules/patients/patients.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
      ],
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    OrganizationsModule,
    DoctorsModule,
    CommonModule,
    SpecilizationsModule,
    AvailabilitySchedulesModule,
    PatientsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
