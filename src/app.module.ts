import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { DynamooseModule } from 'nestjs-dynamoose';
import { AuthModule } from './auth/auth.module';
import config from './config';

@Module({
  imports: [
    DynamooseModule.forRoot(
      config.DYNAMODB_MODE === 'local'
        ? {
            local: config.DATABASE_URL,
          }
        : {
            aws: {
              region: 'us-west-2',
              accessKeyId: 'AKIAXR4MIYRFYRER3J6X',
              secretAccessKey: '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',
            },
          },
    ),
    StudentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
