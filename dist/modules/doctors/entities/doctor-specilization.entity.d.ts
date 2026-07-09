import { Specilization } from "../../specilizations/entities/specilization.entity";
import { Doctor } from "./doctor.entity";
export declare class DoctorSpecilization {
    id: number;
    doctor_id: number;
    Doctor: Doctor;
    specilization_id: number;
    specilization: Specilization;
    created_at: Date;
    updated_at: Date;
}
