import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert, 
  BeforeUpdate
} from 'typeorm';
import { PhoneCountryCode } from './phone-country-code.entity';
import { country } from './country.entity';
import slugify from 'slugify';

@Entity('organizations')
export class Organization {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'name', length:100 })
    name: string;

    @Column({ unique: true })
    slug: string;

    @BeforeInsert()
    @BeforeUpdate()
    generateSlug() {
        if (this.name) {
        this.slug = slugify(this.name, {
            lower: true,      // Convert to lower case
            strict: true,     // Strip special characters except replacement
            trim: true,       // Trim leading and trailing replacement chars
        });
        }
    }

    @Column({ name: 'size', type:'integer' })
    size: number;

    @Column({ name: 'phone_country_code_id', type: 'bigint' })
    phone_country_code_id: number;

    @ManyToOne(() => PhoneCountryCode)
    @JoinColumn({ name: 'phone_country_code_id' })
    PhoneCountryCode: PhoneCountryCode;

    @Column({ name: 'phone_number', length:20 })
    phone_number: string;

    @Column({ name: 'email', length:200 })
    email: string;

    @Column({ name: 'country_id', type: 'bigint' })
    country_id: number;

    @ManyToOne(() => country)
    @JoinColumn({ name: 'country_id' })
    country: country;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
    
}
