
import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specilization } from '../../modules/specilizations/entities/specilization.entity';

@Injectable()
export class SpecilizationSeeder implements Seeder {
  constructor(
    @InjectRepository(Specilization)
    private readonly specilizationRepository: Repository<Specilization>,
  ) {}

  async seed(): Promise<any> {
    const specializations = [
      {
        title: 'Cardiologist',
        description: 'Specializes in diagnosing and treating heart and blood vessel diseases.',
      },
      {
        title: 'Orthopedic',
        description: 'Treats conditions related to bones, joints, muscles, and ligaments.',
      },
      {
        title: 'Dermatologist',
        description: 'Specializes in skin, hair, and nail disorders.',
      },
      {
        title: 'Neurologist',
        description: 'Diagnoses and treats disorders of the brain and nervous system.',
      },
      {
        title: 'Pediatrician',
        description: 'Provides medical care for infants, children, and adolescents.',
      },
      {
        title: 'Gynecologist',
        description: 'Specializes in women’s reproductive health and related conditions.',
      },
      {
        title: 'Psychiatrist',
        description: 'Diagnoses and treats mental health conditions.',
      },
      {
        title: 'Ophthalmologist',
        description: 'Specializes in eye diseases and vision care.',
      },
      {
        title: 'ENT Specialist',
        description: 'Treats disorders of the ear, nose, and throat.',
      },
      {
        title: 'General Physician',
        description: 'Provides primary care and treats common illnesses and health concerns.',
      },
    ];

    const newSpecilizations = [];
    for (const specilization of specializations) {
      const exists = await this.specilizationRepository.findOneBy({ title: specilization.title, organization_id:null });
      if (!exists) newSpecilizations.push(specilization);
    }

    return newSpecilizations.length ? this.specilizationRepository.save(newSpecilizations) : [];
  }

  async drop(): Promise<any> {
    return this.specilizationRepository.clear();
  }
}
