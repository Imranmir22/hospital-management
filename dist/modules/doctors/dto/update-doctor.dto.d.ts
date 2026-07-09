import { UpdateUserDto } from "../../users/dto/update-user.dto";
export declare class DoctorProfileDto {
    gender: string;
    dob: Date;
    experience_years: number;
    experience_months: number;
    bio: string;
    consultation_fee: number;
    is_verified: boolean;
}
export declare class UpdateDoctorDto {
    user: UpdateUserDto;
    profile: DoctorProfileDto;
    specilization: number[];
    languages: number[];
    organization_id: number;
}
