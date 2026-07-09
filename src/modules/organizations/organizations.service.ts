import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import { AuthService } from '../auth/auth.service';
import { OrganizationUser } from './entities/organization-user.entity';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrganizationsService {

  constructor( 
    private dataSource: DataSource,

    private authService: AuthService,
    @InjectRepository(Organization)
      private organizationsRepository: Repository<Organization>,
  
  ){

  }
  async create(createOrganizationDto: CreateOrganizationDto) {
    return await this.dataSource.transaction(async (manager) => {
      const user = await this.authService.register(createOrganizationDto.user, manager);

      const organization = manager.getRepository(Organization).create(createOrganizationDto.organization);
      const savedOrganization = await manager.getRepository(Organization).save(organization);

      const organizationUser = manager.getRepository(OrganizationUser).create({
        organization_id: savedOrganization.id,
        user_id: user.id,
        super_admin: true,
      });
      await manager.getRepository(OrganizationUser).save(organizationUser);

      return savedOrganization;
    });
  }



  findAll() {
    return `This action returns all organizations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }

  async findBySlug(slug : string){
    return await this.organizationsRepository.findOne({where:{
      slug:slug
    }})
  }
}
