import { CreateUserDto } from "../../users/dto/create-user.dto";
export declare class DoctorProfileDto {
    gender: string;
    dob: Date;
    experience_years: number;
    experience_months: number;
    bio: string;
    consultation_fee: number;
    is_verified: boolean;
}
export declare class CreateDoctorDto {
    user: CreateUserDto;
    profile: DoctorProfileDto;
    specilization: number[];
    languages: number[];
    organization_id: number;
}
