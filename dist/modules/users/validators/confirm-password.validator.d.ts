import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class ConfirmPasswordConstraint implements ValidatorConstraintInterface {
    validate(password: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function ConfirmPassword(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
