import { Organization } from "../../organizations/entities/organization.entity";
import { User } from "../../users/entities/user.entity";
import { DoctorSpecilization } from "./doctor-specilization.entity";
import { DoctorLanguage } from "./doctor-languages.entity";
export declare class Doctor {
    id: number;
    organization_id: number;
    organization: Organization;
    user_id: number;
    user: User;
    specilizations: DoctorSpecilization[];
    languages: DoctorLanguage[];
    gender: string;
    dob: Date;
    experience_years: number;
    experience_months: number;
    bio: string;
    consultation_fee: number;
    is_available: boolean;
    is_verified: boolean;
    created_at: Date;
    updated_at: Date;
}
