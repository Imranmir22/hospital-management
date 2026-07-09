import { Organization } from "../../organizations/entities/organization.entity";
import { User } from "../../users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DoctorSpecilization } from "./doctor-specilization.entity";
import { Language } from "src/modules/common/entities/language.entity";
import { DoctorLanguage } from "./doctor-languages.entity";

@Entity('doctors')
export class Doctor {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'organization_id', type: 'bigint' })
    organization_id: number;

    @ManyToOne(() => Organization)
    @JoinColumn({ name: 'organization_id' })
    organization: Organization;

    @Column({ name: 'user_id', type: 'bigint' })
    user_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
    
    @OneToMany(() => DoctorSpecilization, (specilization) => specilization.Doctor)
    specilizations: DoctorSpecilization[];

    @OneToMany(() => DoctorLanguage, (language) => language.doctor)
    languages: DoctorLanguage[];


    @Column({ name: 'gender', length: 50 })
    gender: string;

    @Column({ name: 'dob', type: 'date' })
    dob: Date;

    @Column({ name: 'experience_years', type: 'int' })
    experience_years: number;

    @Column({ name: 'experience_months', type: 'int' })
    experience_months: number;

    @Column({ name: 'bio', type: 'text' })
    bio: string;

    @Column({ name: 'consultation_fee', type: 'decimal', precision: 10, scale: 2 })
    consultation_fee: number;

    @Column({ name: 'is_available' })
    is_available: boolean;

    @Column({ name: 'is_verified' })
    is_verified: boolean;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

}
