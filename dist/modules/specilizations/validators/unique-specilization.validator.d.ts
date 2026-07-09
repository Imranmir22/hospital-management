import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { Repository } from 'typeorm';
import { Specilization } from '../entities/specilization.entity';
export declare class IsSpecilizationUniqueConstraint implements ValidatorConstraintInterface {
    private specilizationRepository;
    constructor(specilizationRepository: Repository<Specilization>);
    validate(title: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsSpecilizationUnique(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
