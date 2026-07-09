import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AvailabilitySchedule {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    doctor_id: number;

    @Column()
    day_of_week: string;

    @Column()
    start_time: string;

    @Column()
    end_time: string;

    @Column()
    slot_duration: number;

    @Column()
    organization_id: number;
}
