import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specilization } from '../entities/specilization.entity';

@ValidatorConstraint({ name: 'IsSpecilizationUnique', async: true })
@Injectable()
export class IsSpecilizationUniqueConstraint implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(Specilization)
    private specilizationRepository: Repository<Specilization>,
  ) {}

  async validate(title: string, args: ValidationArguments): Promise<boolean> {
      if (!title) return true;
      const { organization_id } = args.object as { organization_id?: number };
    const specilization = await this.specilizationRepository.findOneBy({
      title,
      organization_id,
    });
    return specilization ? false : true;
  }

  defaultMessage(args: ValidationArguments): string {
    return 'Specilization $value already exists';
  }
}

export function IsSpecilizationUnique(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsSpecilizationUniqueConstraint,
    });
  };
}
