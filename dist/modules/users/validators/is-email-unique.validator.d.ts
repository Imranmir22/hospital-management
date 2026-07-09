import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validate(email: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsEmailUnique(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
