import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Serve static files from the 'dist' folder
  app.use(express.static(join(__dirname, '..', 'client', 'dist')));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
