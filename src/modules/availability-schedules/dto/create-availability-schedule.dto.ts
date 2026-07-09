import { IsEnum, IsInt, IsMilitaryTime, IsOptional, Min } from "class-validator";
import { Column } from "typeorm";
import { WeekDays } from "../enums/week-days.enum";


export class CreateAvailabilityScheduleDto {

    @IsInt()
    doctor_id: number;

    @IsEnum(WeekDays)
    day_of_week: WeekDays;

    @IsMilitaryTime()
    start_time: string;

    @IsMilitaryTime()
    end_time: string;

    @IsInt()
    @Min(5)
    slot_duration: number;

    @IsOptional()
    organization_id: number;
}
