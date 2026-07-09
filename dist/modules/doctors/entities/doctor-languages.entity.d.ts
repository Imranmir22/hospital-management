import { Doctor } from "./doctor.entity";
import { Language } from "../../common/entities/language.entity";
export declare class DoctorLanguage {
    id: number;
    doctor_id: number;
    doctor: Doctor;
    language_id: number;
    language: Language;
    created_at: Date;
    updated_at: Date;
}
