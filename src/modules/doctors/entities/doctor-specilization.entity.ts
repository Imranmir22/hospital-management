import { Specilization } from "../../specilizations/entities/specilization.entity";
import { Organization } from "../../organizations/entities/organization.entity";
import { User } from "../../users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Doctor } from "./doctor.entity";

@Entity('doctor_specilization')
export class DoctorSpecilization {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'doctor_id', type: 'bigint' })
    doctor_id: number;

    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctor_id' })
    Doctor: Doctor;

    @Column({ name: 'specilization_id', type: 'bigint' })
    specilization_id: number;

    @ManyToOne(() => Specilization)
    @JoinColumn({ name: 'specilization_id' })
    specilization: Specilization;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

}
