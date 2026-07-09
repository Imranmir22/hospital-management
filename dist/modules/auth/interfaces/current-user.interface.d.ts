export interface JwtUser {
    uuid: string;
    email: string;
    name: string;
}
export interface JwtFlags {
    email_verified: boolean;
    two_factor_enabled: boolean;
}
export interface CurrentUser {
    user: JwtUser;
    pgUserId?: string;
    permissions: string[];
    flags: JwtFlags;
    orgId?: string;
}
