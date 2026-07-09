import { Decimal128 } from 'typeorm';
export declare class UserDto {
    first_name: string;
    last_name: string;
    email: string;
    static from(entity: any): UserDto;
}
export declare class LanguageDto {
    id: number;
    title: string;
    static from(entity: any): LanguageDto;
}
export declare class SpecilizationDto {
    id: number;
    title: string;
    static from(entity: any): SpecilizationDto;
}
export declare class DoctorResponseDto {
    id: number;
    gender: string;
    dob: Date;
    experience_years: number;
    experience_months: number;
    bio: string;
    consultation_fee: Decimal128;
    is_available: boolean;
    is_verified: boolean;
    created_at: Date;
    user: UserDto;
    specilizations: SpecilizationDto[];
    languages: LanguageDto[];
    static from(entity: any): DoctorResponseDto;
}
