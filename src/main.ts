// Development mode
// import * as dotenv from 'dotenv';
// dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

// This function configures the express application
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
    .addBearerAuth({ name: 'x-api-key', type: 'apiKey', in: 'header' })
    .setTitle('AFEX API')
    .setDescription('Test students API serverless')
    .setVersion('1.0')
    .addTag('students')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('documentation', app, document);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
