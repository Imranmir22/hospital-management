import { CanActivate, ExecutionContext } from "@nestjs/common";
import { OrganizationsService } from "../organizations.service";
export declare class OrganizationGuard implements CanActivate {
    private orgService;
    constructor(orgService: OrganizationsService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
