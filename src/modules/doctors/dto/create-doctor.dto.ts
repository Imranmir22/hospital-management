import { Type } from 'class-transformer';
import {
    ArrayNotEmpty,
    IsArray,
    IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

export class DoctorProfileDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  gender: string;

  @IsNotEmpty()
  dob: Date;

  @IsInt()
  @IsPositive()
  experience_years: number;

  @IsInt()
  @IsPositive()
  experience_months: number;

  @MaxLength(400)
  bio: string;

  @IsNotEmpty()
  @IsPositive()
  consultation_fee: number;

  @IsBoolean()
  is_verified: boolean;
}

export class CreateDoctorDto {

    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;

    @ValidateNested()
    @Type(() => DoctorProfileDto)
    profile: DoctorProfileDto;

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    specilization: number[];

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    languages: number[];

    @IsOptional()
    organization_id:number

}
