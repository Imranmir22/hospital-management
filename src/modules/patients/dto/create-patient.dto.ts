import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePatientDto {

    @IsNotEmpty()
    gender: string;
    
    @IsNotEmpty()
    dob: Date;

    @IsOptional()
    blood_group?: string;

    @IsNotEmpty()
    emergency_phone_ext?: string;

    @IsNotEmpty()
    emergency_phone?: string;
}
