import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, JoinColumn, ManyToOne,Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('patients')
export class Patient {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'user_id', type: 'bigint' })
    user_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ name: 'gender', type: 'varchar' })
    gender: string;

    @Column({ name: 'dob', type: 'date' })
    dob: Date;

    @Column({ name: 'blood_group', type: 'varchar', length: 3, nullable: true })
    blood_group: string | null;

    @Column({ name: 'emergency_phone_ext', type: 'varchar', nullable: true })
    emergency_phone_ext: string | null;

    @Column({ name: 'emergency_phone', type: 'varchar', nullable: true })
    emergency_phone: string | null;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
}
