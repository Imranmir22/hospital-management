import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { OrganizationsService } from "../organizations.service";

@Injectable()
export class OrganizationGuard implements CanActivate {
  constructor(private orgService: OrganizationsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const slug = request.params.org_slug;

    const org = await this.orgService.findBySlug(slug);
    if (!org) throw new NotFoundException(`Organization not found`);
    request.organization = org;
    // Expose the org id on the body so it lands on the DTO before the
    // ValidationPipe runs (guards run before pipes). Overwrite any
    // client-sent value so it can't be spoofed.
    request.body = request.body ?? {};
    request.body.organization_id = Number(org.id);
    return true;
  }
}