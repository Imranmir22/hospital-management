import { PhoneCountryCode } from './phone-country-code.entity';
import { country } from './country.entity';
export declare class Organization {
    id: number;
    name: string;
    slug: string;
    generateSlug(): void;
    size: number;
    phone_country_code_id: number;
    PhoneCountryCode: PhoneCountryCode;
    phone_number: string;
    email: string;
    country_id: number;
    country: country;
    created_at: Date;
    updated_at: Date;
}
