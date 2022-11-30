import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('User')
    private studentModel: Model<any, any>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentModel.create(createStudentDto);
  }

  findAll() {
    return this.studentModel.scan().exec();
  }

  // async find(findStudentDto: CreateStudentDto): Promise<Students[]> {
  //   return this.studentsModel.find(findStudentDto);
  // }

  findOne(id: string) {
    return this.studentModel.get({ id });
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.update({ id }, updateStudentDto);
  }

  remove(id: string) {
    return this.studentModel.delete({ id });
  }
}
