import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { BloodGroup, Gender } from '../../common/enums/patient.enums';

export class CreatePatientDto {
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsNotEmpty()
  dob: Date;

  @IsOptional()
  @IsEnum(BloodGroup)
  blood_group?: BloodGroup;

  @IsNotEmpty()
  emergency_phone_ext?: string;

  @IsNotEmpty()
  emergency_phone?: string;
}
