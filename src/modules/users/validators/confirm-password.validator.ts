import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'ConfirmPassword', async: true })
@Injectable()
export class ConfirmPasswordConstraint implements ValidatorConstraintInterface {
  async validate(password: string, args: ValidationArguments): Promise<boolean> {
    const dto = args.object as any;
    if (!password || !dto.password_confirmation) return true;
    return password === dto.password_confirmation;
  }

  defaultMessage(args: ValidationArguments): string {
    return 'Password does not match';
  }
}

export function ConfirmPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ConfirmPasswordConstraint,
    });
  };
}
