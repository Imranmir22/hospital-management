import { Injectable } from '@nestjs/common';
import { CreateSpecilizationDto } from './dto/create-specilization.dto';
import { UpdateSpecilizationDto } from './dto/update-specilization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Specilization } from './entities/specilization.entity';
import { IsNull, Repository } from 'typeorm';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Organization } from '../organizations/entities/organization.entity';

@Injectable()
export class SpecilizationsService {
  constructor(
    @InjectRepository(Specilization)
      private specilizationsRepository: Repository<Specilization>,
  ){

  }
  async create(createSpecilizationDto: CreateSpecilizationDto, organization:Organization) {
    const specilization = this.specilizationsRepository.create(createSpecilizationDto);
    await this.specilizationsRepository.save(specilization);
  }

  async findAll(paginationDto:PaginationDto, organization: Organization) {
    const [data, total] = await this.specilizationsRepository.findAndCount({
      where:[
        { organization_id: organization.id },
        { organization_id: IsNull() },
      ],
      skip: paginationDto.skip,
      take: paginationDto.limit,
    });

    return {
      data,
      meta: {
        total,
        page: paginationDto.page,
        limit: paginationDto.limit,
        totalPages: Math.ceil(total / paginationDto.limit),
      },
    };
    
  }

  async findOne(id: number) {
    return  await this.specilizationsRepository.findOneBy({id})
  }

  update(id: number, updateSpecilizationDto: UpdateSpecilizationDto) {
    return `This action updates a #${id} specilization`;
  }

  remove(id: number) {
    return `This action removes a #${id} specilization`;
  }
}
