import { Specilization } from "src/modules/specilizations/entities/specilization.entity";
import { Organization } from "../../organizations/entities/organization.entity";
import { User } from "../../users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Doctor } from "./doctor.entity";
import { Language } from "../../common/entities/language.entity";

@Entity('doctor_language')
export class DoctorLanguage {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'doctor_id', type: 'bigint' })
    doctor_id: number;

    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctor_id' })
    doctor: Doctor;

    @Column({ name: 'language_id', type: 'bigint' })
    language_id: number;

    @ManyToOne(() => Language)
    @JoinColumn({ name: 'language_id' })
    language: Language;
    
    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

}
