import { Expose, Type } from 'class-transformer';
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
import { Decimal128 } from 'typeorm';

export class UserDto {

  @Expose()
  first_name: string;

  @Expose()
  last_name: string;

  @Expose()
  email: string;

  static from(entity: any): UserDto {
    const dto = new UserDto();
    dto.first_name = entity ? entity.first_name : null;
    dto.last_name = entity ? entity.last_name : null;
    dto.email = entity ? entity.email : null;
    return dto;
  }
}


export class LanguageDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  static from(entity: any): LanguageDto {
    const dto = new LanguageDto();
    dto.id = entity ? entity.id : null;
    dto.title = entity ? entity.title : null;
    return dto;
  }
}


export class SpecilizationDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  static from(entity: any): SpecilizationDto {
    const dto = new SpecilizationDto();
    dto.id = entity ? entity.id : null;
    dto.title = entity ? entity.title : null;
    return dto;
  }

}


export class DoctorResponseDto {
  @Expose()
  id: number;


  @Expose()
  gender: string;

  @Expose()
  dob: Date;

  @Expose()
  experience_years: number;

  @Expose()
  experience_months: number;

  @Expose()
  bio: string;

  @Expose()
  consultation_fee: Decimal128;

  @Expose()
  is_available: boolean;

  @Expose()
  is_verified: boolean;

  @Expose()
  created_at: Date;

  @Expose()
  @Type(() => UserDto)
  user: UserDto;

  @Expose()
  @Type(() => SpecilizationDto)
  specilizations: SpecilizationDto[];

  @Expose()
  @Type(() => LanguageDto)
  languages: LanguageDto[];

  static from(entity: any): DoctorResponseDto {
    const dto = new DoctorResponseDto();
    dto.id = entity ? entity.id : null;
    dto.bio = entity ? entity.bio : null;
    dto.gender = entity ? entity.gender : null;
    dto.dob = entity ? entity.dob : null;
    dto.experience_years = entity ? entity.experience_years : null;
    dto.experience_months = entity ? entity.experience_months : null;
    dto.consultation_fee = entity ? entity.consultation_fee : null;
    dto.is_available = entity ? entity.is_available : null;
    dto.is_verified = entity ? entity.is_verified : null;
    dto.created_at = entity ? entity.created_at : null;
    dto.user = entity && entity.user ? UserDto.from(entity.user) : null;
    dto.specilizations = entity && entity.specilizations ? entity.specilizations.map((specilization) => SpecilizationDto.from(specilization.specilization)) : [];
    dto.languages = entity && entity.languages ? entity.languages.map((language) => LanguageDto.from(language.language)) : [];
    return dto;
  }
}

