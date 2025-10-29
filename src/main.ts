import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://attendanceuiportal.netlify.app',
      'https://attendance-ui-portal.netlify.app',
    ],
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8000);
}
bootstrap();
