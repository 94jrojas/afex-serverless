import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { DynamooseModule } from 'nestjs-dynamoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DynamooseModule.forRoot({
      aws: {
        region: 'local',
        accessKeyId: 'null',
        secretAccessKey: 'null',
      },
      local: true,
    }),
    StudentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
