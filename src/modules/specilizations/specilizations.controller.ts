import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SpecilizationsService } from './specilizations.service';
import { OrganizationGuard } from '../organizations/guards/organization.guard';
import { CreateSpecilizationDto } from './dto/create-specilization.dto';
import { UpdateSpecilizationDto } from './dto/update-specilization.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { OrganizationPipe } from '../organizations/pipes/organization.pipe';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { CurrentOrg } from '../organizations/decorators/organization.decorator';
import { Organization } from '../organizations/entities/organization.entity';

@UseGuards(OrganizationGuard)
@Controller('organizations/:org_slug/specilizations')
export class SpecilizationsController {
  constructor(private readonly specilizationsService: SpecilizationsService) {}

  @Post()
  create(@Body() createSpecilizationDto: CreateSpecilizationDto, @CurrentOrg() org: Organization) {
    return this.specilizationsService.create(createSpecilizationDto, org);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto, @CurrentOrg() organization: Organization) {
    return this.specilizationsService.findAll(paginationDto, organization);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specilizationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecilizationDto: UpdateSpecilizationDto) {
    return this.specilizationsService.update(+id, updateSpecilizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specilizationsService.remove(+id);
  }
}
