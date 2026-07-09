// lowercase.pipe.ts
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class OrganizationPipe implements PipeTransform<string, string> {
    constructor(
        private user: User
    ){}
  transform(value: string, metadata: ArgumentMetadata): string {
    if (typeof value !== 'string') {
      throw new BadRequestException('Validation failed: Expected a string value');
    }
    return value.toLowerCase();
  }
}
