import { Organization } from '../../organizations/entities/organization.entity';
export declare class Specilization {
    id: number;
    organization_id: number;
    organization: Organization;
    title: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}
