
import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role }  from '../../modules/users/entities/roles.entity'

@Injectable()
export class RolesSeeder implements Seeder {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async seed(): Promise<any> {
    const roles = [
      { name: 'Super-Admin'},
      { name: 'Admin'},
      { name: 'Doctor'},
      { name: 'Patient'},
    ];

    const newRoles = [];
    for (const role of roles) {
      const exists = await this.roleRepository.findOneBy({ name: role.name });
      if (!exists) newRoles.push(role);
    }

    return newRoles.length ? this.roleRepository.save(newRoles) : [];
  }

  async drop(): Promise<any> {
    return this.roleRepository.clear();
  }
}
