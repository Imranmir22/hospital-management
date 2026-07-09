import { Organization } from './organization.entity';
import { User } from '../../users/entities/user.entity';
export declare class OrganizationUser {
    id: number;
    organization_id: number;
    organization: Organization;
    user_id: number;
    user: User;
    super_admin: boolean;
    created_at: Date;
    updated_at: Date;
}
