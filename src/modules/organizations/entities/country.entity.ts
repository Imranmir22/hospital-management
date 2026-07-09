import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('countries')
export class country {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'short_name', length:20 })
    name: string;

    @Column({ name: 'name', length:100 })
    slug: string;

    @Column({ name: 'currency_name', length:100 })
    currency_name: string;

    @Column({ name: 'currency_code', length:100 })
    currency_code: string;

    @Column({ name: 'currency_symbol', length:100 })
    currency_symbol: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
}
