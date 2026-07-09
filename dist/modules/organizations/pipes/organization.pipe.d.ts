import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { User } from "../../users/entities/user.entity";
export declare class OrganizationPipe implements PipeTransform<string, string> {
    private user;
    constructor(user: User);
    transform(value: string, metadata: ArgumentMetadata): string;
}
