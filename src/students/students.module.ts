import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { DynamooseModule } from 'nestjs-dynamoose';
import { StudentSchema } from './schema/student.schema';

@Module({
  imports: [
    DynamooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
