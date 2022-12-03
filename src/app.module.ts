import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { DynamooseModule } from 'nestjs-dynamoose';
import { AuthModule } from './auth/auth.module';
import config from './config';

const dynamooseOptions = {
  ...(config.DYNAMODB_MODE === 'server' && {
    local: config.DATABASE_URL,
  }),
  ...(config.DYNAMODB_MODE === 'server' && {
    accessKeyId: config.KEY_ID,
    secretAccessKey: config.SECRET_KEY,
    region: 'us-wast-2',
  }),
};

@Module({
  imports: [
    DynamooseModule.forRoot(dynamooseOptions),
    StudentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
