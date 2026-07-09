import { ValidationPipe } from '@nestjs/common';

export class AppValidation extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      enableDebugMessages: true,
    });
  }
}
