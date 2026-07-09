import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppValidation } from './common/exceptions/validation.pipe';
import { useContainer } from 'class-validator';
import { VersioningType } from '@nestjs/common';
import { AuthGuard } from './modules/auth/guards/auth.gaurd';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  // app.useGlobalGuards(new AuthGuard('jwt'));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(new AppValidation);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
