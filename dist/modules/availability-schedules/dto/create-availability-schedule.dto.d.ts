import { WeekDays } from "../enums/week-days.enum";
export declare class CreateAvailabilityScheduleDto {
    doctor_id: number;
    day_of_week: WeekDays;
    start_time: string;
    end_time: string;
    slot_duration: number;
    organization_id: number;
}
