/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable auto validation
  app.useGlobalPipes(new ValidationPipe ());

  //notificationมั้ง
  app.useWebSocketAdapter(new IoAdapter(app));
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
