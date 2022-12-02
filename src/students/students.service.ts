import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentModel } from './schema/student.schema';

@Injectable()
export class StudentsService {
  // This function creates a new student
  async create(createStudentDto: CreateStudentDto): Promise<any> {
    try {
      const createdStudent = new StudentModel(createStudentDto);
      const savedStudent = await createdStudent.save();
      if (!savedStudent)
        throw new HttpException('Student not created', HttpStatus.BAD_REQUEST);
      return savedStudent;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  // This function finds all students with params
  async findAll(updateStudentDto: UpdateStudentDto = null): Promise<any> {
    try {
      const students = await StudentModel.scan(updateStudentDto).exec();
      if (!students)
        throw new HttpException('No students found', HttpStatus.NOT_FOUND);
      return students;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  // This function finds a student by id
  async findOne(id: string): Promise<any> {
    try {
      const student = await StudentModel.get(id);
      if (!student)
        throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
      return student;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  // This function updates a student by id
  async update(id: string, updateStudentDto: UpdateStudentDto): Promise<any> {
    try {
      const student = await StudentModel.get(id);
      if (!student?.id)
        throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
      const editedStudent = Object.assign(student, updateStudentDto);
      const savedStudent = await StudentModel.update(editedStudent);
      if (!savedStudent?.id)
        throw new HttpException('Student not updated', HttpStatus.BAD_REQUEST);
      return savedStudent;
    } catch (err) {
      throw new HttpException(
        err.message,
        err.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  // This function removes a student by id
  async remove(id: string): Promise<any> {
    try {
      const student = await StudentModel.get(id);
      if (!student?.id)
        throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
      await StudentModel.delete(id);
      return student;
    } catch (err) {
      throw new HttpException(
        err.message,
        err.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
