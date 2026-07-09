import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ConfirmPassword } from '../validators/confirm-password.validator';
import { IsEmailUnique } from '../validators/is-email-unique.validator';

export class CreateUserDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsEmailUnique()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @ConfirmPassword()
  password: string;

  @IsNotEmpty()
  password_confirmation: string;
}
