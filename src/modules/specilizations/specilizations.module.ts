import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecilizationsService } from './specilizations.service';
import { SpecilizationsController } from './specilizations.controller';
import { Specilization } from './entities/specilization.entity';
import { IsSpecilizationUniqueConstraint } from './validators/unique-specilization.validator';
import { OrganizationsModule } from '../organizations/organizations.module';

@Module({
  imports: [TypeOrmModule.forFeature([Specilization]), OrganizationsModule],
  controllers: [SpecilizationsController],
  providers: [SpecilizationsService, IsSpecilizationUniqueConstraint],
})
export class SpecilizationsModule {}
