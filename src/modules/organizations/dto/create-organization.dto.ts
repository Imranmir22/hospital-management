import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

export class CreateOrganizationDetailsDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  @IsInt()
  @IsPositive()
  size: number;

  @IsInt()
  @IsPositive()
  phone_country_code_id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  phone_number: string;

  @IsEmail()
  @MaxLength(200)
  email: string;

  @IsInt()
  @IsPositive()
  country_id: number;
}

export class CreateOrganizationDto {
  @ValidateNested()
  @Type(() => CreateUserDto)
  user: CreateUserDto;

  @ValidateNested()
  @Type(() => CreateOrganizationDetailsDto)
  organization: CreateOrganizationDetailsDto;
}
