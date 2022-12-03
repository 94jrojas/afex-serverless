import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Server } from 'http';
import { Context } from 'aws-lambda';
import { createServer, proxy, Response } from 'aws-serverless-express';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

let cachedServer: Server;

const swaggerConfig = new DocumentBuilder()
  .addBearerAuth({ name: 'x-api-key', type: 'apiKey', in: 'header' })
  .setTitle('AFEX API')
  .setDescription('Test students API serverless')
  .setVersion('1.0')
  .addTag('students')
  .build();

async function bootstrap(): Promise<Server> {
  const expressApp = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('api', app, document);

  await app.init();
  return createServer(expressApp);
}
export async function handler(event: any, context: Context): Promise<Response> {
  event.path = event.rawPath;
  if (!cachedServer) {
    const server = await bootstrap();
    cachedServer = server;
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
}
