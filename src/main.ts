import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for multiple origins
  app.enableCors({
    origin: [
      'http://localhost:3000', // local React dev
      'https://ascentware-attend.vercel.app', // hosted React
    ],
    credentials: true, // if you want cookies or auth headers
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8000);
}
bootstrap();
