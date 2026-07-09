import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, InternalServerErrorException } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.ACCEPTED)
  async create(@Body() createOrganizationDto: CreateOrganizationDto) {
    try{
      return await this.organizationsService.create(createOrganizationDto);
    }catch(e){
      throw new InternalServerErrorException('Failed to Sign up');
    }
  }

  @Get()
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationsService.update(+id, updateOrganizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(+id);
  }
}
