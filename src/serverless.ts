import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { Express } from 'express';
import { Server } from 'http';
import { Context } from 'aws-lambda';
import { createServer, proxy, Response } from 'aws-serverless-express';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import config from './config';

// Save the server instance to reuse it when needed
let cachedServer: Server;

// This function creates a new xpress application
async function createExpressApp(
  expressApp: Express,
): Promise<INestApplication> {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  return app;
}

// This function configures the express application
async function bootstrap(): Promise<Server> {
  const expressApp = express();
  const app = await createExpressApp(expressApp);
  app.enableCors({
    origin: '*',
  });
  app.useGlobalPipes(new ValidationPipe());

  const configSwagger = new DocumentBuilder()
    .addBearerAuth({ name: 'x-api-key', type: 'apiKey', in: 'header' })
    .setTitle('AFEX API')
    .setDescription('Test students API serverless')
    .setVersion('1.0')
    .addTag('students')
    .addServer(config.SERVER_SWAGGER_URL)
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('documentation', app, document);

  await app.init();
  return createServer(expressApp);
}

// This function is called when the lambda is invoked
export async function handler(event: any, context: Context): Promise<Response> {
  if (!cachedServer) {
    const server = await bootstrap();
    cachedServer = server;
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
}
